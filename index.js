fetch("https://api.escuelajs.co/api/v1/categories")
.then(response => response.json())
.then(data=>{
   

      let card = "";

      for( let users of data){

         card+=`<div class="col-6 col-md-4 col-lg-4 mt-3">
                    <div class="card" style="width: 307px;display: flex;align-items: center;">
                        <img src="${users.image}" style="width: 186px;
                        height: 186px;
                        border-radius: 50%;padding: 20px;" class="card-img-top" alt="avatar">
                        <div class="card-body">
                        <h2 class="card-text text-center">${users.name}</h2>
                        </div>
                    </div>
                </div>`;
      }
        document.getElementById("contendio").innerHTML = card;
})