function fetchNextImg(){
   const loader = document.getElementsByClassName('loader')[0];
   loader.style.display = "block";
   unsplash.style.display = "none";

   fetch("https://source.unsplash.com/collection/9026257")
      .then(response => {
         if (response.ok) {
            console.log(response);
            const img = document.getElementById("unsplash");
            const url = response.url;
            img.src = url;

            const btn = document.getElementById("randomImg");
            btn.disabled=true;
            btn.style.cursor = "not-allowed";
            
            // change back to be abled and pointer in 3s
            setTimeout(function(){ 
            btn.disabled=false;
            btn.style.cursor = "pointer";
            }, 3000);

         } else {
            console.log("Fetch did not work");
         }
         loader.style.display = "none";
         unsplash.style.display = "inline";
      })
      .catch(err => {
         const imgError = document.getElementsByClassName("img-error-msg");
         console.log(err);
         //imgError.style.display = "block";
      })
      ;
}

fetchNextImg();