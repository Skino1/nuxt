<template>
    <div class="cont w-[1200px] mx-auto">
        <div class="h-[470px] flex bg-[url('assets/Intro.jpg')] bg-cover rounded-xl">
        </div>
        <p class="font-bold uppercase text-4xl flex justify-center p-10">hot sale</p>
        <div class="topItems flex flex-wrap items-center justify-evenly mt">
            <TopItemsElement></TopItemsElement>
            <TopItemsElement></TopItemsElement>
            <TopItemsElement></TopItemsElement>
            <TopItemsElement></TopItemsElement>
            <TopItemsElement></TopItemsElement>
            <TopItemsElement></TopItemsElement>
        </div>
    </div>
    <div class="bg-[#F1F1F1] mt-10 ">
        <div class="cont w-[1200px] mx-auto">
            <p class="flex font-bold uppercase text-4xl justify-center py-10">choice your style</p>
            <div class="flex flex-wrap items-center pb-10 justify-between">
                <div class="flex flex-col items-end float-left lg:w-[50%] md:w-[100%]">
                    <p class="font-light text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut gravida
                        sem, a lobortis nisl. Ut erat augue, mollis et congue at, luctus sed nulla. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum facilisis tellus nec mi
                        dignissim viverra. Nunc placerat fermentum diam, in placerat risus consequat vel. Aenean enim risus,
                        pellentesque ut lacinia ac, mattis vel sem. </p>
                    <NuxtLink to="/store" 
                        class="flex uppercase bg-[#01ADFF] w-[205px] h-[50px] rounded-3xl items-center justify-center text-white font-bold mt-8">go
                        to store</NuxtLink>
                </div>
                <img class=" flex float-right md:justify-center" src="assets/promo.png" alt="123">
                
            </div>
        </div>
    </div>
    <div class="cont w-[1200px] py-10 mx-auto">
        <p class="flex font-bold uppercase text-4xl justify-center py-5">About us</p>
            <CardList></CardList>
    </div>
    <div class="bg-[url('assets/form-background.png')] bg-cover bg-no-repeat py-10">
        <p class="font-bold text-4xl uppercase text-white flex justify-center py-5">take your keyboard today</p>
        <div class="flex flex-wrap cont w-[1200px] justify-center items-center mx-auto pt-5">
            <p class="text-white lg:w-[50%] md:w-[100%] font-light text-xl leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut gravida sem, a
                lobortis nisl. Ut erat augue, mollis et congue at, luctus sed nulla. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum facilisis tellus nec mi dignissim
                viverra. Nunc placerat fermentum diam, in placerat risus consequat vel. Aenean enim risus, pellentesque ut
                lacinia ac, mattis vel sem. </p>
            <form class="flex flex-col h-[395px] lg:w-[35%] md:w-[50%] bg-white rounded-xl ml-10 items-center" action="">
                <input class="bg-[#D9D9D9] h-[68px] my-10 w-[90%] rounded-2xl pl-4" type="text" placeholder="Your name">
                <input class="bg-[#D9D9D9] h-[68px] w-[90%] rounded-2xl pl-4 mb-[50px]" type="text" placeholder="Your e-mail">
                <button class="bg-[#01ADFF] text-white uppercase h-[58px] w-[165px] rounded-2xl text-xl font-bold">Submit</button>
            </form>
        </div>
    </div>
</template>
