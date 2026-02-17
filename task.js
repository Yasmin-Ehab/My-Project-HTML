
const productsDiv =document.querySelector("#product");


fetch('https://fakestoreapi.com/products').then((res)=>{
return res.json()
}
) .then((data)=>{
    productsDiv.innerHTML= " "
  data.map((product) => {
    productsDiv.innerHTML += `
    
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${product.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title${product.title}</h5>
    <p class="card-text">${product.description.substring(0 , 100)}<a href="test.html?id=${product.id}" class="card-link" >...</a></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">${product.price}</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`;
  });
});

 