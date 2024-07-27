import './index.css'
export default function Card({title}){
    return(
        <>
        <h1 className='bg-black-400 text-white p-2.5 text-bold rounded-xl text-center justify-center'>{title}</h1>
    <div className='cardContent' class="max-w-sm rounded overflow-hidden shadow-lg justify-center">
  <div class="px-6 py-4 text-center justify-center width-100">
    <div class="font-bold text-xl mb-2">Lorem, ipsum dolor.
    </div>
    <p class="text-gray-700 text-base text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
        </>
    );
}