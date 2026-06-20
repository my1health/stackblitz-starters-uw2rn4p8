"use client";


import { useCart } from "@/components/CartContext";


export default function CartPage(){

const {
cart,
removeFromCart
}=useCart();



const total = cart.reduce(
(sum,item)=>sum+item.price,
0
);



return (

<main className="p-10">


<h1 className="text-4xl font-bold mb-10">
Your Cart
</h1>



{
cart.length===0?

<p>
Your cart is empty
</p>


:

<div>


{
cart.map((item,index)=>(


<div
key={index}
className="flex justify-between border-b py-4"
>


<div>

<h2 className="font-bold">
{item.name}
</h2>

<p>
₦{item.price.toLocaleString()}
</p>

</div>



<button

onClick={()=>removeFromCart(index)}

className="bg-red-500 text-white px-4 py-2 rounded"

>

Remove

</button>


</div>


))

}



<h2 className="text-2xl font-bold mt-8">

Total:
₦{total.toLocaleString()}

</h2>



<button className="mt-6 bg-green-600 text-white px-8 py-3 rounded">

Checkout

</button>


</div>

}


</main>

)

}
