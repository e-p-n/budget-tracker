let db;
const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;
    db.createObjectStore('budget_item', { autoIncrement: true});
}

request.onsuccess = function(event) {
    db = event.target.result;
    if(navigator.onLine) {
        uploadBudgetItem();
    }

};

request.onerror = function(event) {
    console.log(event.target.errorCode);
}

function saveRecord(record) {
    const transaction = db.transaction(['budget_item'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('budget_item');
    budgetObjectStore.add(record);

}

function uploadBudgetItem() {
    const transaction = db.transaction(['budget_item'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('budget_item');
    const getAll = budgetObjectStore.getAll();
    getAll.onsuccess = function() {
        // if there was data in indexedDb's store, let's send it to the api server
        if(getAll.result.length > 0) {
            fetch('api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'aplication/json, text plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(serverResponse => {
                if(serverResponse.message) {
                    throw new Error(serverResponse);
                }
                //open one more transaction
                const transaction = db.transaction(['budget_item'], 'readwrite');
                // access the budget_item object store
                const budgetObjectStore = transaction.objectStore('budget_item');
                // clear all items in your store
                budgetObjectStore.clear();

                alert('Alert budget item has been submitted!');
                location.reload();

            })
            .catch(err => {
                console.log(err);
            });
        }
    }

}

// listen for app to come back online
window.addEventListener('online', uploadBudgetItem);