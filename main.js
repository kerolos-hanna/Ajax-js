var getUser = document.querySelector('[type=button]');
var tbody = document.querySelector('table tbody')

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();

getUser.addEventListener('click',function(){
  if(xhr.readyState == 4 && xhr.status == 200)
  {
    //console.log(JSON.parse(xhr.response)[0].id)
    var element = JSON.parse(xhr.response)
    element.forEach(item => {
      var tr = 
      `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
      </tr>
      `;
      tbody.innerHTML+=tr;
    });
  }
})