class storageRecordApi {  
  static getAllRecords() {
    return fetch('http://localhost:4000/api/v1/good_index_records')
    .then(response => response.json())
    .catch(error => error)
  }
  static getSelectedRecord(recordId) {
    return fetch(`http://localhost:4000/api/v1/good_index_records/${recordId}`)
    .then(response => response.json())
    .catch(error => error)
  }

  static createRecord(good_index_record) {
    const request = new Request('http://localhost:4000/api/v1/good_index_records', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({good_index_record})
    });

    return fetch(request)
    .then(response => response.json())
    .catch(error => error)
  }
  static editRecord(recordId,good_index_record) {
    const request = new Request(`http://localhost:4000/api/v1/good_index_records/${recordId}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({good_index_record})
    });

    return fetch(request)
    .then(response => response.json())
    .catch(error => error)
  }
  static deleteRecord(recordId) {
    console.log("deleteRecord");
    const request = new Request(`http://localhost:4000/api/v1/good_index_records/${recordId}`, {
      method: 'DELETE'
    });
    return fetch(request)
    .then(response => response.json())
    .catch(error => error)
  }
  
}

export default storageRecordApi
