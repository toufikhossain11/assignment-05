// let currentTab ='all'
const tabActive = ['btn-primary','text-white'];
const tabInactive = ['text-slate-700','border-state-200','text-black'];
// document.getElementById('tab-all').addEventListener('click',function(){
  
// })
// function switchTab (tab){
//     const tabs =["all","open","close"];
//     currentTab=tab;
//     for (const t of tabs) {
//         const tabeName = document.getElementById('tab-' + t);
//         if(t === tab){
//             tabeName.classList.remove(...tabInactive);
//             tabeName.classList.add(...tabActive);
//         }else{
//             tabeName.classList.add(...tabInactive);
//             tabeName.classList.remove(...tabActive);
//         }
//     }
// }
// switchTab(currentTab);

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
          <div class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-green-500">
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

    }else{
       div.innerHTML=`
          <div class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-orange-600">
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

// document.getElementById('tab-all').addEventListener('click',function (){
//     console.log('t')
// })

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
          <div class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-green-500">
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
          <div class="card bg-base-100 w-75 h-85 shadow-sm border-t-4 border-orange-600">
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
