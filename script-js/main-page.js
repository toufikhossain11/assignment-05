const tabActive = ['btn-primary','text-white'];
const tabInactive = ['text-slate-700','border-state-200','text-black'];

//  all-tab

const allTab = ()=>{
    const p = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(p)
   .then(referce=>referce.json())
   .then(data=>displayPost(data.data));
   //all-btn-toggle
   const all = document.getElementById('tab-all');
   const open = document.getElementById('tab-open');
   const close = document.getElementById('tab-close');
   open.classList.remove(...tabActive);
   close.classList.remove(...tabActive);
    all.classList.add(...tabActive);
  }

  const displayPost =(posts)=>{
      const cardContener =document.getElementById('card-contener');
    cardContener.innerHTML="";
    posts.forEach(post => {
        const div = document.createElement('div');
      // div.innerHTML=`
      //     <div class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-orange-600">
      // <div class="card-body">
      //   <div class="flex justify-between">
      //     <img class="h-6 w-6" src="./assets/Open-Status.png" alt="">
      //     <div class="w-[80px] h-8 rounded-full badge badge-soft badge-error">${post.priority}</div>
      //   </div>
      //   <h2 class="card-title">
      //     ${post.title}
      //   </h2>
      //   <p class="text-[#64748B]">${post.description}</p>
      //   <div class="card-actions">
      //     <div class="badge badge-error badge-soft badge-outline">Bug</div>
      //     <div class="badge badge-warning badge-soft badge-outline">help wanted</div>
      //   </div>
      //   <hr class="my-3" style="color:rgba(128, 128, 128, 0.356);">
      //   <p class="text-[#64748B]">#${post.author}</p>
      //   <p class="text-[#64748B]">${post.createdAt}</p>
      // </div>
      // </div> 
      // `
      if(post.status==='open'){
    // const div = document.createElement('div');
      div.innerHTML=`
          <div onclick="showModal(${post.id})" class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-green-500 cursor-pointer">
      <div class="card-body">
        <div class="flex justify-between">
          <img class="h-6 w-6" src="./assets/Open-Status.png" alt="">
          <div class="w-[80px] h-8 rounded-full badge badge-soft badge-error">${post.priority}</div>
        </div>
        <h2 class="card-title">
          ${post.title}
        </h2>
        <p class="text-[#64748B]">${post.description}</p>
        <div class="card-actions">
          <div class="badge badge-error badge-soft badge-outline">${post.labels[0]}</div>
          <div class="badge badge-warning badge-soft badge-outline">${post.labels[1]}</div>
        </div>
        <hr class="my-3" style="color:rgba(128, 128, 128, 0.356);">
        <p class="text-[#64748B]">#${post.author}</p>
        <p class="text-[#64748B]">${post.createdAt}</p>
      </div>
      </div> 
      `

    }else{
       div.innerHTML=`
          <div onclick="showModal(${post.id})" class=" card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-orange-600 cursor-pointer">
      <div class="card-body">
        <div class="flex justify-between">
          <img class="h-6 w-6" src="./assets/Closed- Status .png" alt="">
          <div class="w-[80px] h-8 rounded-full badge badge-soft badge-error">${post.priority}</div>
        </div>
        <h2 class="card-title">
          ${post.title}
        </h2>
        <p class="text-[#64748B]">${post.description}</p>
        <div class="card-actions">
          <div class="badge badge-error badge-soft badge-outline">Bug</div>
          <div class="badge badge-warning badge-soft badge-outline">help wanted</div>
        </div>
        <hr class="my-3" style="color:rgba(128, 128, 128, 0.356);">
        <p class="text-[#64748B]">#${post.author}</p>
        <p class="text-[#64748B]">${post.createdAt}</p>
      </div>
      </div> 
      `
    }
    cardContener.appendChild(div);
    
    const countNum=document.getElementById('count-number');
    countNum.innerText= cardContener.children.length;
});
  }
allTab()

//open-tab
const openTab = ()=>{
    const p = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(p)
   .then(referce=>referce.json())
   .then(data=>openDisplayPost(data.data));
   //open-btn-toggl
   const all = document.getElementById('tab-all');
   const open = document.getElementById('tab-open');
   const close = document.getElementById('tab-close');
   all.classList.remove(...tabActive);
   close.classList.remove(...tabActive);
    open.classList.add(...tabActive);
}

const openDisplayPost =(posts)=>{
    const cardContener =document.getElementById('card-contener');
    cardContener.innerHTML="";
posts.forEach(post => {
  
  if(post.status==='open'){
    const div = document.createElement('div');
      div.innerHTML=`
          <div onclick="showModal(${post.id})" class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-green-500 cursor-pointer">
      <div class="card-body">
        <div class="flex justify-between">
          <img class="h-6 w-6" src="./assets/Open-Status.png" alt="">
          <div class="w-[80px] h-8 rounded-full badge badge-soft badge-error">${post.priority}</div>
        </div>
        <h2 class="card-title">
          ${post.title}
        </h2>
        <p class="text-[#64748B]">${post.description}</p>
        <div class="card-actions">
          <div class="badge badge-error badge-soft badge-outline">Bug</div>
          <div class="badge badge-warning badge-soft badge-outline">help wanted</div>
        </div>
        <hr class="my-3" style="color:rgba(128, 128, 128, 0.356);">
        <p class="text-[#64748B]">#${post.author}</p>
        <p class="text-[#64748B]">${post.createdAt}</p>
      </div>
      </div> 
      `
      cardContener.appendChild(div);
      
      const countNum=document.getElementById('count-number');
      countNum.innerText= cardContener.children.length;

  }
  
});


    // const cardContener =document.getElementById('card-contener');
    // cardContener.innerHTML="";
    // posts.map(post => {
    //     console.log(post)
    //     const div = document.createElement('div');
    //   div.innerHTML=`
    //       <div class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-orange-600">
    //   <div class="card-body">
    //     <div class="flex justify-between">
    //       <img class="h-6 w-6" src="./assets/Open-Status.png" alt="">
    //       <div class="w-[80px] h-8 rounded-full badge badge-soft badge-error">${post.priority}</div>
    //     </div>
    //     <h2 class="card-title">
    //       ${post.title}
    //     </h2>
    //     <p class="text-[#64748B]">${post.description}</p>
    //     <div class="card-actions">
    //       <div class="badge badge-error badge-soft badge-outline">Bug</div>
    //       <div class="badge badge-warning badge-soft badge-outline">help wanted</div>
    //     </div>
    //     <hr class="my-3" style="color:rgba(128, 128, 128, 0.356);">
    //     <p class="text-[#64748B]">#${post.author}</p>
    //     <p class="text-[#64748B]">${post.createdAt}</p>
    //   </div>
    //   </div> 
    //     `
    //     cardContener.appendChild(div);

    //     const countNum=document.getElementById('count-number');
    //     countNum.innerText= cardContener.children.length;
    //  });
}

//closed-tab
const closeTab = ()=>{
    const p = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(p)
   .then(referce=>referce.json())
   .then(data=>closeDisplayPost(data.data));
   // close-btn-toggol
  const open = document.getElementById('tab-open');
  const close = document.getElementById('tab-close');
  const all = document.getElementById('tab-all');
  open.classList.remove(...tabActive);
  all.classList.remove(...tabActive);
  close.classList.add(...tabActive);
}

const closeDisplayPost =(posts)=>{
    const cardContener =document.getElementById('card-contener');
    cardContener.innerHTML="";
posts.forEach(post => {
  
  if(post.status==='closed'){
    const div = document.createElement('div');
      div.innerHTML=`
          <div onclick="showModal(${post.id})" class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-orange-600 cursor-pointer">
      <div class="card-body">
        <div class="flex justify-between">
          <img class="h-6 w-6" src="./assets/Closed- Status .png" alt="">
          <div class="w-[80px] h-8 rounded-full badge badge-soft badge-error">${post.priority}</div>
        </div>
        <h2 class="card-title">
          ${post.title}
        </h2>
        <p class="text-[#64748B]">${post.description}</p>
        <div class="card-actions">
          <div class="badge badge-error badge-soft badge-outline">Bug</div>
          <div class="badge badge-warning badge-soft badge-outline">help wanted</div>
        </div>
        <hr class="my-3" style="color:rgba(128, 128, 128, 0.356);">
        <p class="text-[#64748B]">#${post.author}</p>
        <p class="text-[#64748B]">${post.createdAt}</p>
      </div>
      </div> 
      `
      cardContener.appendChild(div);
      
      const countNum=document.getElementById('count-number');
      countNum.innerText= cardContener.children.length;

  }
  
});
}

//modal
const showModal =(id)=>{
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>modal(data))
}

const modal =(posts)=>{
  console.log(posts)
 const modalContinar = document.getElementById('modal-continar');
 modalContinar.innerHTML=`
 <div class="modal-box">
    <h3 class="text-lg font-bold">${posts.data.title}</h3>
    <div class="pt-3 flex items-center gap-2">
      <div class="w-15 h-6 rounded-full badge  bg-green-500 text-white">${posts.data.status}</div>
      <i class= "text-[5px] text-gray-600 fa-solid fa-circle"></i>
      <p class="text-[#64748B] text-[14px]">Opened by ${posts.data.author}</p>
      <i class="text-[5px] text-gray-600 fa-solid fa-circle"></i>
      <p class=" text-[#64748B] text-[14px]">${posts.data.createdAt}</p>

    </div>

    <div class="card-actions pt-4">
          <div class="badge badge-error badge-soft badge-outline">${posts.data.labels[0]}</div>
          <div class="badge badge-warning badge-soft badge-outline">${posts.data.labels[1]}</div>
      </div>

      <p class="text-[#64748B] text-[14px] pt-3">${posts.data.description}</p>

      <div class="flex gap-40 pt-6">
        <div class="">
          <p class="text-[#64748B] text-[14px]">${posts.data.assignee}</p>
          <h2 class="font-semibold">${posts.data.author}</h2>
        </div>
        <div class="">
          <p class="text-[#64748B] text-[14px]">Priority:</p>
          <div class="w-15 h-6 rounded-full badge  bg-red-500 text-white">${posts.data.priority}</div>        </div>
      </div>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
 `
 document.getElementById('my_modal_1').showModal();
}