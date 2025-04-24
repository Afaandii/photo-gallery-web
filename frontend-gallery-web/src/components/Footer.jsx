export default function Footer() {
  return (
    <>
      <footer className="footer flex justify-between items-center bg-neutral text-neutral-content p-10">
        <aside>
          <img
            src="../src/assets/img/logo_sementara.png"
            alt="logo footer"
            className="w-20 h-20 rounded-full"
          />
          <p className="mb-2 mt-2">Website Foto Kenangan</p>
          <p>Providing reliable tech since 2025</p>
        </aside>
        <nav className="flex flex-col gap-4">
          <h6 className="footer-title">Social Media</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M7.5 2C4.4 2 2 4.4 2 7.5v9C2 19.6 4.4 22 7.5 22h9c3.1 0 5.5-2.4 5.5-5.5v-9C22 4.4 19.6 2 16.5 2h-9zm4.5 4.5c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5 2.5-5.5 5.5-5.5zm0 2.5a3 3 0 100 6 3 3 0 000-6zm5-3.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="fill-current -mt-1 -ml-1"
              >
                <path d="M20 4.5c-1.2-.6-2.4-1-3.7-1.2-.2.4-.5.9-.7 1.3-1.3-.2-2.7-.2-4 0-.2-.5-.5-.9-.7-1.3-1.3.2-2.5.6-3.7 1.2-2.4 3.5-3 7-2.7 10.3 1.6 1.2 3.3 2 5.2 2.5.4-.5.8-1 1.1-1.5-.6-.2-1.2-.5-1.7-.9.1-.1.3-.1.4-.1 1.2.2 2.4.2 3.6 0 .1 0 .3 0 .4.1-.6.4-1.1.7-1.7.9.3.5.7 1 1.1 1.5 1.9-.5 3.6-1.3 5.2-2.5.4-4-.6-7.4-2.6-10.3zm-8.1 8.6c-.8 0-1.5-.7-1.5-1.5s.6-1.5 1.5-1.5c.8 0 1.5.7 1.5 1.5s-.6 1.5-1.5 1.5zm4.1 0c-.8 0-1.5-.7-1.5-1.5s.6-1.5 1.5-1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path>
              </svg>
            </a>
          </div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            <span className="text-lg font-bold text-red-500 ml-2">Afandi</span>
          </p>
        </nav>
      </footer>
    </>
  );
}
