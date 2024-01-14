import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="flex flex-col justify-center space-y-8 py-20">
      <div className="flex flex-col space-y-12 items-center">
      <h2 className="text-3xl font-jakarta font-extrabold sm:text-4xl">
          PROFILE
        </h2>
       <div className="hidden lg:block">
          <div className="flex flex-row justify-between items-center space-x-44">
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
            <div className="text-center">
              <figure>
              <div class="flex justify-center items-center">
                <img
                  src="./mhn.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
                </div>
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Mahendra Adi Rahmawan
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block pt-4">
                    <a
                      href="https://www.instagram.com/mahendraadir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="w-7 px-2 md:w-12 h-12 lg:w-7/12  "
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mahendraadir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-7 px-2 md:w-12 h-12 lg:w-7/12"
                      />
                    </a>
                    <a
                      href="https://github.com/mahendra581"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="w-7 px-2 md:w-12 h-12 lg:w-7/12"
                      />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
    </div>
  );
}

export default App;
