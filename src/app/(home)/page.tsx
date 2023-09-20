import { Button, Carousel, Input, Tag } from "antd";

export default function Home() {
  return <></>;
  return (
    <main className='h-[1000vw]'>
      <div className='grid grid-cols-8 gap-6'>
        <div className='border-r-2'>
          <h2 className='font-medium'>Top Headline</h2>
        </div>
        <div className='col-span-7'>
          <Carousel autoplay>
            <div>
              <div className='grid grid-cols-3 gap-6 bg-slate-100'>
                <img
                  className='w-full h-96 object-cover col-span-2'
                  src='https://s.yimg.com/os/creatr-uploaded-images/2023-09/79a0dc60-5603-11ee-bbbf-3c8afa272e4e'
                  alt='img'
                />
                <div className='grid gap-3 p-3'>
                  <div>
                    <Tag color='blue'>Apple</Tag>
                    <Tag>Special Report</Tag>
                  </div>
                  <span className='text-2xl capitalize'>
                    The Morning After: Apple preps software update to address
                    iPhone 12 radiation concerns
                  </span>
                  <span>
                    Apple is prepping a software update for the three-year-old
                    iPhone 12s after French regulators alleged the phone exceeds
                    proper radiation levels. France stopped selling the
                    smartphone after recommendations from the country’s
                    radiation watchdog (ANFR).The softw…
                  </span>

                  <Button>Read More</Button>
                </div>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-6 bg-slate-100'>
                <img
                  className='w-full h-96 object-cover col-span-2'
                  src='https://ichef.bbci.co.uk/news/1024/branded_news/3F72/production/_131124261_garavsky.jpg'
                  alt='img'
                />
                <div className='grid gap-1 p-3'>
                  <div>
                    <Tag color='blue'>Apple</Tag>
                    <Tag>Special Report</Tag>
                  </div>
                  <span className='text-2xl capitalize'>
                    watchOS 10 has arrived, bringing widgets back to the Apple
                    Watch
                  </span>
                  <span>
                    It's a big day for Apple users as the company is rolling out
                    major operating system updates for most of its devices (Mac
                    users need to wait a bit longer). Just ahead of the Apple
                    Watch Series 9 and Apple Watch Ultra 2 arriving later this
                    week, the company has…
                  </span>

                  <Button>Read More</Button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </main>
  );
}
