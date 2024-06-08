import React from 'react'
import { WobbleCard } from './ui/WobbleCard'
import Image from 'next/image'

const AiWobbleCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-24 mb-16">
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-xs">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Azure OpenAI powers the entire universe
        </h2>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
        Azure OpenAI is a cloud-based platform provided by Microsoft’s Azure cloud computing service in partnership with OpenAI. It provides access to state-of-the-art artificial intelligence (AI) models, enabling organizations to build and deploy AI applications.
        </p>
      </div>
      <Image
        src="/Microsoft-OpenAI.webp"
        width={300}
        height={300}
        alt="linear demo image"
        className="absolute -right-4 filter -bottom-4 md:-top-4 object-contain rounded-2xl opacity-60 md:opacity-80"
      />
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Providing seamless integration of AI services
      </h2>
      <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
      {`Don't worry about scaling and costs- I’ve got it covered.`}
      </p>
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
      <div className="max-w-sm">
        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Exploring My Comprehensive Range of Offered Expert Services
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Bring your own Data to Azure OpenAI
          <br />
            Fine tuned Chatbot models
          <br />
            Document Intelligence
          <br />
          Speech to text documentation
          <br />
          Text summarization and Translation
          <br />
          and what ever else you need!
        </p>
      </div>
      <Image
        src="/aoai-architecture.png"
        width={500}
        height={500}
        
        alt="linear demo image"
        className="absolute -right-5 lg:-right-5 -bottom-10 object-contain rounded-2xl opacity-20 md:opacity-80"
      />
    </WobbleCard>
  </div>
  )
}

export default AiWobbleCard
