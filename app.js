window.onload = function () {
    let form = document.querySelector("form");
    let result = document.getElementById("result");
    let searchInput = document.getElementById("search");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
  
      let searchValue = searchInput.value.trim();
      if (searchValue !== "") {
        const httpReq = new XMLHttpRequest();
        let url = "http://localhost/info2180-lab4/superheroes.php?query=" + encodeURIComponent(searchValue);
        httpReq.open('GET', url);
        httpReq.send();
  
        httpReq.onreadystatechange = function () {
          if (httpReq.readyState === XMLHttpRequest.DONE) {
            if (httpReq.status === 200) {
              result.innerHTML = httpReq.responseText;
            } else {
              alert('There was an Error');
            }
          }
        };
      }
    });
  };
  