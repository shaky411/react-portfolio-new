import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';

function Contact(props) {
  return (
    <div>
      <h1 class="ml-5">Contact Page</h1>
      <p class="ml-5">
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <Link to="learn" role="button" className="bg-blue-500 ml-5 no-underline hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </Link>
      <Link to="contact" role="button" className="bg-indigo-500 ml-5 no-underline hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;
