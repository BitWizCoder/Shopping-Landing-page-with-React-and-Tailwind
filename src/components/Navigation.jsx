function Navigation() {
  return (
    <nav className="container mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center py-3">
      <div>
        <a href="#">
          <img src="img/logo.svg" alt="" />
        </a>
      </div>
      <ul className="flex gap-7 uppercase flex-wrap justify-center">
        <li>
          <a href="#">catalogue</a>
        </li>
        <li>
          <a href="#">fashion</a>
        </li>
        <li>
          <a href="#">favourite</a>
        </li>
        <li>
          <a href="#">lifestyle</a>
        </li>
        <li>
          <a href="#" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">sign up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

