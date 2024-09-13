

document.addEventListener('scroll',navchange)

function navchange(){

    let move = document.querySelector('.ul')

        if(window.scrollY>50){
            
            move.classList.add('scrolled')
        }
        else{
            move.classList.remove('scrolled')
        }
}



function slide_close(){

    let nav_slide = document.querySelector('.nav_slide')
    
    nav_slide.classList.remove('slide_active')
}
function slide_open(){

    let nav_slide = document.querySelector('.nav_slide')

    nav_slide.classList.add('slide_active')
}

// ------navbar over-----------

let add = document.querySelector("#add")
let close=document.querySelector("#close");
let slide=document.querySelector(".slide")

//add to cart open 1-step
add.addEventListener('click',()=>{
    slide.classList.add('slide-active')
})
//add to cart close 2-step
close.addEventListener('click',()=>{
    slide.classList.remove('slide-active')
})

document.addEventListener('DOMContentLoaded',loadfood)

function loadfood(){
    loadcontant();
}

function loadcontant(){
    //remove food items form cart
    let del=document.querySelectorAll("#del")

        del.forEach((btn)=>{
            btn.addEventListener('click',removeitems);
        })
//product items change event
    let qty=document.querySelectorAll(".input-box")

        qty.forEach((input)=>{
            input.addEventListener('change',changeQty);
        })
//product cart
        let btn1 = document.querySelectorAll('.add')
        
        btn1.forEach((bt)=>{
            bt.addEventListener('click',addcart);
        })
        updatetotal();
}
//remove items
function removeitems(){
    
        let title1=this.parentElement.querySelector('.food-name').innerHTML;
        itemlist=itemlist.filter(el=>el.title!=title1);
    this.parentElement.remove();
    loadcontant();
}

//change qty
function changeQty(){
    if(isNaN(this.value)|| this.value<1){
        this.value=1;
    }
    loadcontant()
}

let itemlist=[];
//add cart
function addcart(){

    let food=this.parentElement;

    console.log(food);
    
    
    let title = food.querySelector('.h2').innerHTML;
    let price = food.querySelector('.btn1').innerText;
    let img = food.querySelector('.food-img').src;

    

    let newproduct1={title,price,img}
    
    if(itemlist.find((el)=>el.title==newproduct1.title))
    {
        alert("Product Already Added in Cart")
        return;
    }
    else{
        itemlist.push(newproduct1)
    }

    let newproduct=createcart(title,price,img);
    let element=document.createElement('div');
    element.innerHTML=newproduct
    let cartbasket = document.querySelector('.content')
    cartbasket.append(element);
    loadcontant()
}
function createcart(title,price,img){
    return`
    <div class="cart-boxs">
            <img src="${img}" class="f-img">
            <div class="detail-box">
                <div class="food-name">${title}</div>
                <div class="amount-box">
                   <div class="cart-price">${price}</div>
                   <div class="cart-amt">${price}</div>
                </div>
                <input type="number" value="1" class="input-box">
            </div>
            <i class="fa-solid fa-trash-can" id="del"></i>
        </div>

    `
}
function updatetotal(){
    let cartitems=document.querySelectorAll(".cart-boxs")
    let totalvalue=document.querySelector(".total-price")

    let total=0;
      
    cartitems.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace("Rs."," "));
        let qty=product.querySelector('.input-box').value;
        total+=(price*qty);
        product.querySelector('.cart-amt').innerText='Rs.'+(price*qty);
        
    })
    totalvalue.innerHTML='Rs.'+total;

    let cartcount=document.querySelector('.count')
    let count=itemlist.length;
    cartcount.innerHTML=count;

    if(count==0){
        cartcount.style.display='none';
    }
    else{
        cartcount.style.display='block';

}

}

