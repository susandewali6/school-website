
import img from '../assets/logo.jpg'
export default () => {

  const footerNavs = [
      {
          href: '/about',
          name: 'About'
      },
      {
          href: '/team',
          name: 'our team '
      },
      {
          href: 'javascript:void()',
          name: ''
      },
      
      {
          href: '/gallery',
          name: 'Gallery'
      }

      
  ]

  return (
      <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 w-full ">
        <div className=' md:flex'>
          <div className="max-w-lg sm:mx-auto sm:text-center">
              <img src={img} className="w-32 sm:mx-auto" />
              <p className="leading-relaxed mt-2 text-[15px]">
                 Since 2073 B.S
              </p>
          </div>
          <div>
          <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
              {
                  footerNavs.map((item, idx) => (
                      <li className=" hover:text-gray-800">
                          <a key={idx} href={item.href}>
                              { item.name }
                          </a>
                      </li>
                  ))
              }
          </ul>
          </div>
          </div>
          
          <div className="mt-6 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                      

                      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                          <a href="https://www.facebook.com/photo/?fbid=117509671277523&set=a.117509687944188&__tn__=%3C">
                              <svg class="svg-icon w-6 h-6 text-blue-700" viewBox="0 0 20 20">
                                  <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                              </svg>
                          </a>
                          
                      </li>
                      <p>Visit Our facebook page</p>
                      

                      
                  </ul>
              </div>
          <style jsx>{`
              .svg-icon path,
              .svg-icon polygon,
              .svg-icon rect {
                  fill: currentColor;
              }
          `}</style>
      </footer>
  )
}

