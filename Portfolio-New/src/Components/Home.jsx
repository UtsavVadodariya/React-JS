import React from 'react'

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Utsav_Resume.pdf";
    link.download = "Utsav-CV.pdf";
    link.click();
  }

  return (
    <div className='pt-[45px] pl-[60px]'>

      <div className="font-medium" id="home">
        <h1 className="text-[24px] items-center">
          <img src="./112.svg" alt="" className="inline-block mt-[-10px]" />Hi I'm Utsav Vadodariya
        </h1>

        <h1 className="text-[64px] font-semibold ml-2 text-center sm:text-left">
          A FULL-STACK DEVELOPER
        </h1>

        <div className="img flex flex-wrap justify-center sm:justify-start">
          <div className="main2 border-green-600 w-[550px] h-[500px] mt-[135px] relative">
            <img src="./117.png" alt="" className="absolute bottom-7" />
            <img src="./115.png" alt="" className="absolute top-12" />
            <img src="./114.png" alt="" className="absolute left-[435px] top-[320px]" />
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="h-[90px] w-[90%] sm:w-[526px] text-[20px] mt-[165px] text-[#5d626f] text-center sm:text-left">
              As a dedicated professional with a passion for PICO, I bring 6+ Months of experience in development throughout my best work.
            </p>
            <a href="file:///C:/Users/Utsav/Downloads/Utsav_Resume.pdf" target='_blank'>
              <button className="h-[49.1px] w-[200.15px] fill-white mt-12 rounded-[4px] flex items-center justify-center bg-gradient-to-r from-[#fc6936] to-[#fa9432] uppercase" onClick={handleDownload}>
                <img src="./118.svg" alt="" className="inline-block fill-white" /> Download CV
              </button>
            </a>
            <h1 className="text-[24px] font-semibold mt-[160px] ml-[110px] text-center sm:text-left">
              Digital Marketing On
            </h1>
          </div>
        </div>
      </div>






      <div className="about flex   w-[100% ]" id='about'>

        <div className='h-[780px] w-[334.66px] '>

          <div className='d1 h-[238px] w-[208px] flex justify-center items-center flex-col'>
            <h2 class="text-[48px] font-extrabold  text-transparent stroke-orange-500">
              5+
            </h2>
            <p className='text-[18px] text-[#9699a0] uppercase font-semibold'>Case success</p>
          </div>

          <div className="d2  h-[238px] w-[208px]  pl-[120px] relative">
            <div className="d3 h-[238px] w-[208px] absolute top-[-55px] flex justify-center items-center flex-col">
              <h2 className='text-[48px] font-extrabold  text-transparent text-white'>5+</h2>
              <p className='text-[18px] text-white uppercase font-semibold'>happy client</p>
            </div>
          </div>

          <div className="d4 h-[238px] w-[208px] relative">
            <div className="d5 h-[238px] w-[208px] absolute top-[-110px] flex justify-center items-center flex-col">
              <h2 className='text-[48px] font-extrabold  text-transparent stroke-orange-500'>20+</h2>
              <p className='text-[18px] text-[#9699a0] uppercase font-semibold'>prectice Project</p>
            </div>
          </div>

        </div>
        <div className='h-[780px] w-[717.35px]  pl-[50px] pt-[70px]'>
          <h4 className='uppercase text-[24px] text-[#fd5105] font-semibold gap-5 items-center'><img src="./120.png" alt="" className='inline-block gap-5 ' />  About me</h4>

          <h1 className='uppercase text-[48px] text-black font-semibold'>about full-stack developer</h1>
          <p className='text-[16px] text-[#5d626f] w-[555.32px] mt-5'>At PICO, we understand that success is just about delivering a product- it's about building relationships and making a meaningful impact of client.</p>

          <div className='flex h-[82px] w-[555.32px] mt-7'>
            <div className='h-[82px] w-[202.7px]'>
              <div className='flex gap-2 text-[18px] uppercase font-semibold w-[202px] mt-3'><img src="./121.svg" alt="" className='h-[25px] w-[24px]' /> Web design</div>
              <div className='flex gap-2 text-[18px] uppercase font-semibold w-[202px] mt-3'><img src="./121.svg" alt="" className='h-[25px] w-[24px]' /> front-end</div>

            </div>
            <div className='h-[82px] w-[302.7px]'>
              <div className='flex gap-2 text-[18px] uppercase font-semibold w-[302px] mt-3'><img src="./121.svg" alt="" className='h-[25px] w-[24px]' />responsive webpage</div>

              <div className='flex gap-2 text-[18px] uppercase font-semibold w-[202px] mt-3'><img src="./121.svg" alt="" className='h-[25px] w-[24px]' />Back-end</div>

            </div>


          </div>

          <button className='h-[49.1px] w-[200.15px] fill-white text-white font-semibold mt-12  rounded-[4px] items-center bg-gradient-to-r from-[#fc6936] to-[#fa9432] uppercase'>    get in touch now</button>
        </div>
      </div>


      <div className='service h-[1387px] ' id='service'>
        <h4 className='h-[22.3px] uppercase text-[20px] text-[#fd5105] font-semibold gap-5 items-center'><img src="./120.png" alt="" className='inline-block' />       our services</h4>
        <h1 className='text-[48px] font-semibold uppercase mt-5'>best website development</h1><br />
        <span className='span1 text-[48px] font-semibold h-[96px] w-[552.98px] ml-[480px]   px-[24px] py-[30px] uppercase bg-white border-[2px] border-[#fc6936] relative text-[#fc6936]'>services <img src="./113.png" alt="" className='absolute top-[-5px] bottom-[91px] right-[547.98px] left-[-5px]' /><img src="./113.png" alt="" className='absolute top-[111px] bottom-[-5px] left-[-5px] right-[547.98px]' /><img src="./113.png" alt="" className='absolute top-[-5px] left-[247.98px] right-[-5px] bottom-[91px]' /><img src="./113.png" alt="" className='absolute top-[111px] left-[247.98px] right-[-5px] bottom-[-5px]' /></span>


        <div className='relative'>
          <div className='flex mt-[100px] absolute left-[170px] gap-3'>
            <div className='d7 h-[361px] w-[316px] flex justify-center items-center flex-col'>
              <div className='h-[92px] w-[92px]  rounded-[4px] flex justify-center items-center'>
                <img src="./126.svg" alt="" />

              </div>
              <p className='text-[28px] font-semibold uppercase'>web-design</p>
            </div>
            <div className='d8 h-[361px] w-[316px] flex justify-center items-center flex-col'>
              <div className='h-[92px] w-[92px] bg-[#ffece6] rounded-[4px] flex justify-center items-center'>
                <img src="./128.svg" alt="" />

              </div>
              <p className='text-[28px] font-semibold uppercase'>Social media</p>
            </div>
          </div>
          <div className='flex absolute top-[385px] left-[10px] gap-3'>
            <div className='d9 h-[361px] w-[316px] flex justify-center items-center flex-col'>
              <div className='h-[92px] w-[92px] bg-[#ffece6] rounded-[4px] flex justify-center items-center'>
                <img src="./139.svg" alt="" />

              </div>
              <p className='text-[28px] font-semibold uppercase'>responsive web</p>
            </div>
            <div className='d10 h-[361px] w-[316px] flex items-center justify-center'>
              <img src="./124.png" alt="" className='h-[205px] w-[206px] items-center mx-auto animate-smooth-counterclockwise' />
            </div>
            <div className='d11 h-[361px] w-[316px] flex justify-center items-center flex-col'>
              <div className='h-[92px] w-[92px] bg-[#ffece6] rounded-[4px] flex justify-center items-center'>
                <img src="./129.svg" alt="" />

              </div>
              <p className='text-[28px] font-semibold uppercase'>back-end</p>
            </div>
          </div>
          <div className='flex absolute left-[173px] gap-3 top-[670px]'>
            <div className='d12 h-[361px] w-[316px] flex justify-center items-center flex-col'>
              <div className='h-[92px] w-[92px] bg-[#ffece6] rounded-[4px] flex justify-center items-center'>
                <img src="./131.svg" alt="" />

              </div>
              <p className='text-[28px] font-semibold uppercase'>front-end</p>
            </div>
            <div className='d13 h-[361px] w-[316px] flex justify-center items-center flex-col'>
              <div className='h-[92px] w-[92px] bg-[#ffece6] rounded-[4px] flex justify-center items-center'>
                <img src="./130.svg" alt="" />

              </div>
              <p className='text-[28px] font-semibold uppercase'>Social media</p>
            </div>
          </div>
        </div>

      </div>

      <div className="skill h-[947px] w-[900px] relative" id='skill'>
        <h4 className='h-[22.3px] uppercase text-[20px] text-[#fd5105] font-semibold gap-5 items-center'><img src="./120.png" alt="" className='inline-block' />       my skills</h4>
        <h1 className='text-[48px] font-semibold uppercase mt-5'>explore my skills of</h1><br />
        <span className='span1 text-[48px] font-semibold h-[96px] w-[552.98px] ml-[120px]   px-[24px] py-[30px] uppercase bg-white border-[2px] border-[#fc6936] relative text-[#fc6936]'>Full-stack developer <img src="./113.png" alt="" className='absolute top-[-5px] bottom-[91px] right-[547.98px] left-[-5px]' /><img src="./113.png" alt="" className='absolute top-[111px] bottom-[-5px] left-[-5px] right-[547.98px]' /><img src="./113.png" alt="" className='absolute top-[-5px] left-[569.98px] right-[-5px] bottom-[91px]' /><img src="./113.png" alt="" className='absolute top-[111px] left-[569.98px] right-[-5px] bottom-[-5px]' /></span>

        <div className='pt-[100px] relative'>
          <div className='flex h-[318px] w-[872.66px] justify-evenly'>
            <div className='h-[318px] w-[278px]  d6 flex justify-center items-center flex-col'>
              <div className='h-[80px] w-[80px] rounded-[4px]  flex items-center justify-center bg-[#ffece6]'>
                <img src="./129.svg" alt="" className='h-[50px] w-[50px]' />
              </div>
              <p className='text-[24px] font-semibold mt-[16px] uppercase'>html</p>
            </div>
            <div className='h-[318px] w-[278px]  d7 flex justify-center items-center flex-col'>
              <div className='h-[80px] w-[80px] rounded-[4px]  flex items-center justify-center bg-[#fe8037]'>
                <img src="./136.svg" alt="" className='h-[50px] w-[50px]' />
              </div>
              <p className='text-[24px] font-semibold mt-[16px] uppercase text-white'>css</p>
            </div>
            <div className='h-[318px] w-[278px]  d6 flex justify-center items-center flex-col'>
              <div className='h-[80px] w-[80px] rounded-[4px]  flex items-center justify-center bg-[#ffece6]'>
                <img src="./137.svg" alt="" className='h-[50px] w-[50px]' />
              </div>
              <p className='text-[24px] font-semibold mt-[16px] uppercase'>tailwind</p>
            </div>
          </div>
          <div className='flex h-[318px] w-[872.66px] justify-evenly absolute top-[350px] left-[145px]'>
            <div className='h-[318px] w-[278px]  d6 flex justify-center items-center flex-col'>
              <div className='h-[80px] w-[80px] rounded-[4px]  flex items-center justify-center bg-[#ffece6]'>
                <img src="./138.svg" alt="" className='h-[50px] w-[50px]' />
              </div>
              <p className='text-[24px] font-semibold mt-[16px] uppercase'>bootstrap</p>
            </div>
            <div className='h-[318px] w-[278px]  d6 flex justify-center items-center flex-col'>
              <div className='h-[80px] w-[80px] rounded-[4px]  flex items-center justify-center bg-[#ffece6]'>
                <img src="./139.svg" alt="" className='h-[50px] w-[50px]' />
              </div>
              <p className='text-[24px] font-semibold mt-[16px] uppercase'>javascript</p>
            </div>
            <div className='h-[318px] w-[278px]  d6 flex justify-center items-center flex-col'>
              <div className='h-[80px] w-[80px] rounded-[4px]  flex items-center justify-center bg-[#ffece6]'>
                <img src="./140.svg" alt="" className='h-[50px] w-[50px]' />
              </div>
              <p className='text-[24px] font-semibold mt-[16px] uppercase'>react.js</p>
            </div>
          </div>
        </div>
      </div>


      <div className="portfolio h-[947px] w-[900px] relative" id='portfolio'>
        <h4 className='h-[22.3px] uppercase text-[20px] text-[#fd5105] font-semibold gap-5 items-center'><img src="./120.png" alt="" className='inline-block' />       my portfolio</h4>
        <h1 className='text-[48px] font-semibold uppercase mt-5'>my letest  work &</h1><br />
        <span className='span1 text-[48px] font-semibold h-[96px] w-[552.98px] ml-[260px]   px-[24px] py-[30px] uppercase bg-white border-[2px] border-[#fc6936] relative text-[#fc6936]'>portfolio <img src="./113.png" alt="" className='absolute top-[-5px] bottom-[91px] right-[547.98px] left-[-5px]' /><img src="./113.png" alt="" className='absolute top-[111px] bottom-[-5px] left-[-5px] right-[547.98px]' /><img src="./113.png" alt="" className='absolute top-[-5px] left-[284.98px] right-[-5px] bottom-[91px]' /><img src="./113.png" alt="" className='absolute top-[111px] left-[284.98px] right-[-5px] bottom-[-5px]' /></span>



        <div className='flex w-[448.32px] gap-[100px]'>
          <div className='relative '>
            <div>
              <a href="https://courageous-creponne-886e6c.netlify.app/" target='_blank'>
                <div className='h-[340px] w-[480px] overflow-hidden mt-[50px] rounded-[4px] '>
                  <img src="1.jpeg" alt="" />
                </div>
              </a>
              <div className='h-[148px] w-[424.32px] bg-white rounded-[4px] px-[28px] py-[24px] flex flex-col justify-center absolute top-[300px] left-[120px]'>
                <h4 className='text-[16px] text-[#fd5105] font-semibold uppercase'>#prectice webpage</h4>
                <a className='text-[20px] text-black font-semibold uppercase' href="">html, css, bootstap, javascript</a>
              </div>
            </div>

            <div>
              <a href="https://ephemeral-chimera-ee9826.netlify.app/" target='_blank'>
                <div className='h-[340px] w-[480px] overflow-hidden mt-[120px] rounded-[4px]'>
                  <img src="3.jpeg" alt="" />
                </div></a>
              <div className='h-[148px] w-[424.32px] bg-white rounded-[4px] px-[28px] py-[24px] flex flex-col justify-center absolute top-[770px] left-[120px]'>
                <h4 className='text-[16px] text-[#fd5105] font-semibold uppercase'>#prectice webpage</h4>
                <a className='text-[20px] text-black font-semibold uppercase' href="">html, css, bootstap, javascript</a>
              </div>
            </div>
          </div>

          <div>
            <div className='relative'>
              <div className='pt-[70px] '>
                <a href="https://glittering-shortbread-71b380.netlify.app/" target='_blank'>

                  <div className='h-[340px] w-[480px] overflow-hidden mt-[50px] rounded-[4px]'>
                    <img src="2.jpeg" alt="" />
                  </div>
                </a>
                <div className='h-[148px] w-[424.32px] bg-white rounded-[4px] px-[28px] py-[24px] flex flex-col justify-center absolute top-[400px] left-[120px]'>
                  <h4 className='text-[16px] text-[#fd5105] font-semibold uppercase'>#prectice webpage</h4>
                  <a className='text-[20px] text-black font-semibold uppercase' href="">html, css, bootstap, javascript</a>
                </div>
              </div>

              <div>
                <a href="https://willowy-melomakarona-225511.netlify.app/" target='_blank'>
                  <div className='h-[340px] w-[480px] overflow-hidden mt-[140px] rounded-[4px]'>
                    <img src="4.jpeg" alt="" />
                  </div>
                </a>
                <div className='h-[148px] w-[424.32px] bg-white rounded-[4px] px-[28px] py-[24px] flex flex-col justify-center absolute top-[870px] left-[120px]'>
                  <h4 className='text-[16px] text-[#fd5105] font-semibold uppercase'>#prectice webpage</h4>
                  <a className='text-[20px] text-black font-semibold uppercase' href="">html, css, bootstap, javascript</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='contact h-[832px] w-[1052px]  mt-[400px] flex pt-[48px] pr-[48px] pb-[225px] pl-[48px] relative bg-white' id='contact'>
        <div className='h-[558px] w-[302.15px] bg-[#f4f4f6] p-[24px] rounded-[4px]'>
          <center>
            <h1 className='text-[24px] text-black font-semibold uppercase'>leave a message</h1>
          </center>

          <input type="text" placeholder='Full Name' className='h-[48px] rounded-[4px] w-[252.52px] bg-white p-[16px] mt-[20px]' />
          <input type="tel" placeholder='Phone Number' className='h-[48px] rounded-[4px] w-[252.52px] bg-white p-[16px] mt-[20px]' />
          <input type="text" placeholder='Email Address' className='h-[48px] rounded-[4px] w-[252.52px] bg-white p-[16px] mt-[20px]' />
          <input type="text" placeholder='Service Type' className='h-[48px] rounded-[4px] w-[252.52px] bg-white p-[16px] mt-[20px]' />
          <textarea name="" id="" placeholder='Message' className='h-[110px] rounded-[4px] w-[252.52px] bg-white p-[16px] mt-[20px]'></textarea>
          <center>
            <button className='h-[49.1px] w-[200.15px] fill-white text-white font-semibold mt-4  rounded-[4px] items-center bg-gradient-to-r from-[#fc6936] to-[#fa9432] uppercase'>    submit now</button>
          </center>
        </div>

        <div className='px-[27px] '>
          <h4 className='text-[20px] text-[#fd5105] font-semibold uppercase'><img src="./120.png" alt="" className='inline-block' />      contact me</h4>
          <h1 className='text-[48px] font-semibold uppercase inline-block'>get in touch</h1><br /><br />
          <span className='span1 text-[48px] font-semibold h-[96px] w-[552.98px] ml-[280px] px-[24px] py-[30px]  uppercase bg-white border-[2px] border-[#fc6936] relative text-[#fc6936]'>today <img src="./113.png" alt="" className='absolute top-[-5px] bottom-[91px] right-[547.98px] left-[-5px]' /><img src="./113.png" alt="" className='absolute top-[111px] bottom-[-5px] left-[-5px] right-[547.98px]' /><img src="./113.png" alt="" className='absolute top-[-5px] left-[184.98px] right-[-5px] bottom-[91px]' /><img src="./113.png" alt="" className='absolute top-[111px] left-[184.98px] right-[-5px] bottom-[-5px]' /></span>
          <p className='pl-[70px] w-[613px] text-[16px] font-semibold text-[#5d626f] mt-[40px]'>At PICO, we understand that success is just about delivering a product- about building relationships and making a meaningful impact of client.</p>

          <div className='flex'>
            <div className='h-[107.6px] w-[227.71px] bg-[#f4f4f6] py-[24px] px-[28px] mt-[20px] ml-[14px] rounded-[4px] flex items-center'>
              <div className='h-[50px] w-[50px] rounded-[50%] bg-white flex justify-center items-center'>
                <img src="./156.svg" alt="" className='h-[24px] w-[25px] ' />
              </div>
              <div className='ml-[16px]'>
                <h5 className='uppercase text-[20px] font-semibold mb-[2px]'>Call</h5>
                <a href="" className='text-[16px] font-semibold text-[#5d626f]'>94288 65001</a>
              </div>
            </div>

            <div className='h-[107.6px] w-[367.71px] bg-[#f4f4f6] py-[24px] px-[28px] mt-[20px] ml-[14px] rounded-[4px] flex items-center'>
              <div className='h-[50px] w-[50px] rounded-[50%] bg-white flex justify-center items-center'>
                <img src="./157.svg" alt="" className='h-[24px] w-[25px] ' />
              </div>
              <div className='ml-[16px]'>
                <h5 className='uppercase text-[20px] font-semibold mb-[2px]'>Email</h5>
                <a href="" className='text-[16px] font-semibold text-[#5d626f]'>utsavvadodariya2008@gmail.com</a>
              </div>
            </div>
          </div>

          <button className='h-[49.1px] w-[200.15px] fill-white mt-12 ml-5  rounded-[4px] items-center bg-gradient-to-r from-[#fc6936] to-[#fa9432] uppercase' onClick={handleDownload}><img src="./118.svg" alt="" className='inline-block fill-white' />     Download cv</button>

        </div>

        <div className='footer h-[438.8px] w-[933.06px] absolute top-[656.8px] bottom-[-161px] right-[82.13px] left-[60.8px] flex justify-center p-[40px]'>
          <div className='relative'>
            <center>
              <h1 className='text-[32px] text-white font-semibold uppercase mb-[20px]'>sign up to news letter</h1>

              <input type="text" placeholder='Email Address*' className='input1 text-[16px] py-[19px] px-[20px] bg-[#fd721d] text-white border-none rounded-[4px]' />

              <button className='h-[58px] w-[178px] text-[16px] text-[#fe5c05] bg-white rounded-[4px] font-bold uppercase' >subscribe now</button>


              <div className='flex h-[56px] gap-3 pt-[40px]'>
                <div className='w-[161.48px] h-[56px]  bg-[#fb8c1a] rounded-[4px] px-[11px] py-[19px] flex justify-center items-center'>
                  <img src="./159.svg" alt="" className='h-[34px] w-[34px] ml-[12px] ' />
                  <a href="" className='text-[14px] font-semibold ml-[6px] text-white uppercase'>facebook</a>
                </div>
                <div className='w-[161.48px] h-[56px]  bg-[#fb8c1a] rounded-[4px] px-[11px] py-[19px] flex justify-center items-center'>
                  <img src="./160.svg" alt="" className='h-[34px] w-[34px] ml-[12px] ' />
                  <a href="" className='text-[14px] font-semibold ml-[6px] text-white uppercase'>instagram</a>
                </div>
                <div className='w-[161.48px] h-[56px]  bg-[#fb8c1a] rounded-[4px] px-[11px] py-[19px] flex justify-center items-center'>
                  <img src="./161.svg" alt="" className='h-[34px] w-[34px] ml-[12px] ' />
                  <a href="" className='text-[14px] font-semibold ml-[6px] text-white uppercase'>pintrest</a>
                </div>
                <div className='w-[161.48px] h-[56px]  bg-[#fb8c1a] rounded-[4px] px-[11px] py-[19px] flex justify-center items-center'>
                  <img src="./162.svg" alt="" className='h-[34px] w-[34px] ml-[12px] ' />
                  <a href="" className='text-[14px] font-semibold ml-[6px] text-white uppercase'>linkdin</a>
                </div>
                <div className='w-[161.48px] h-[56px]  bg-[#fb8c1a] rounded-[4px] px-[11px] py-[19px] flex justify-center items-center'>
                  <img src="./163.svg" alt="" className='h-[34px] w-[34px] ml-[12px] ' />
                  <a href="" className='text-[14px] font-semibold ml-[6px] text-white uppercase'>dribble</a>
                </div>
              </div>

              <p className=' absolute top-[270px] left-[135px] text-[16px] text-white font-semibold mt-[44px] mb-[46px] pt-[24px] pr-[70px]'>&copy; 2024 Prosonal Portfolio. All Rights Reserved Designed By Utsav Vadodariya</p>
            </center>

          </div>

        </div>

      </div>

    </div>
  )
}
