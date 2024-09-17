


const loadData = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
  const data = await res.json();
  // console.log(data)

  const cardContainer = document.getElementById('card-container');
  data.posts.forEach((item) => {
    const cardDiv = document.createElement('div');
    cardDiv.style.backgroundColor = 'bg-gray-200';
    cardDiv.style.marginTop = '20px'
    cardDiv.innerHTML = `<div class="bg-gray-200 
  lg:mt-8 mt-3 lg:flex flex-auto p-9 rounded-xl ">
           <div class="flex-auto lg:w-[20px] w-[10px]
       lg:h-[100px] rounded-2xl mt-3">

<div class="w-[70px] h-[70px] bg-white rounded-2xl">
<img src="${item.image}" alt="" class="rounded-2xl">
</div>

            </div>
           <div class="flex-col mx-auto">
             <div class="space-y-3 mb-3">
               <div class="flex gap-6">
                 <h1># ${item.category}</h1>
                 <p id='author-name'>Author : ${item.author.name}</p>
               </div>
               <h2 class="lg:text-xl font-bold w-[100%] px-1">${item.title}</h2>
               <p class="lg:w-[80%] w-[100%] lg:pr-3">${item.description}</p>
             </div>
             <hr>
             <!-- icons div -->
             <div class="flex justify-between mt-6 gap-3">
               <div class="flex lg:w-[90%] w-[80%] justify-start lg:gap-36 gap-3 items-center">
                 <div class="flex lg:gap-7 gap-4 items-center">
                   <i class="fa-regular fa-envelope lg:text-4xl"></i>
                   <h1 class="lg:text-2xl">${item.comment_count}</h1>
                 </div>
                 <div class="flex lg:gap-7 gap-4 items-center">
                   <i class="fa-regular fa-eye lg:text-4xl"></i>
                   <h1 class="lg:text-2xl">${item.view_count}</h1>
                 </div>
                 <div class="flex lg:gap-7 gap-4 items-center">
                   <i class="fa-regular fa-clock lg:text-4xl "></i>
                   <h1 class="lg:text-2xl"><span>${item.posted_time}</span>min</h1>
                 </div>
               </div>
 
 
 
               <!-- last icon -->
               <div class="w-[10%] py-2 px-2 bg-green-400 rounded-full flex justify-center items-center mx-auto">
                 <i class="fa-regular fa-envelope-open"></i>
               </div>
             </div>
 
           </div>
         </div>`
    cardContainer.appendChild(cardDiv)
  })
}
loadData()

const loadData3 = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data1 = await res.json();
  console.log(data1)

  const thirdData = document.getElementById('third-card-container');
thirdData.classList.add('.thirdData3')
  data1.forEach((item) => {
    const datathird = document.createElement('div')
    datathird.innerHTML = `
      <div class="card bg-base-100 lg:w-96 w-[100%] shadow-xl container mx-auto">
      <figure>
          <img src="${item.cover_image}" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            <i class="fa-solid fa-suitcase-rolling"></i>
            <span>${item.author.posted_date}</span>
          </h2>
          <p class="text-lg font-bold">${item.title}</p>
          <p>${item.description}</p>

          <div class="card-actions flex gap-4">

            <div class="flex justify-center items-center w-[50px] h-[50px] rounded-full">
              <img src="${item.profile_image}" alt="" class ='rounded-full'>
            </div>
            <div>
              <h1 class="font-bold">${item.author.name}</h1>
              <p>${item.author.designation}</p>
            </div>

          </div>
        </div>  
                
      </div> 
`
    thirdData.appendChild(datathird)
  })
}
loadData3()