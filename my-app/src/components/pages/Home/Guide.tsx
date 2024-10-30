import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(function Guide() {
  return (
    <section
      id="programming-guide"
      className="my-5 p-5 shadow-primary dark:shadow-white rounded"
    >
      <h3 className="topic">Programmers Guide</h3>
      <div className="grid grid-cols-4 py-5 lg:gap-5 xmd:gap-5">
        <div className="col-span-4 block rounded md:col-span-2 lg:col-span-1">
          <span className="relative my-3 font-bold text-primary-color">
            Categories
          </span>
          <ul className="my-2 grid gap-2 rounded border-t-1 border-solid border-body_dark p-2 dark:border-darker-light lg:p-5">
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>HTML</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>CSS</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>JS</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>JS</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>PHP</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>React</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>HTML</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>CSS</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>JS</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>JS</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>PHP</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-lighter-dark dark:text-darker-light">
              <i className="bi bi-circle-fill text-[0.3rem]"></i>
              <span>React</span>
            </li>
          </ul>
        </div>
        <div className="col-span-1 hidden rounded md:col-span-2 md:block lg:col-span-1">
          <span className="relative my-3 font-bold text-primary-color">
            Outro
          </span>
          <div className="my-2 flex w-full flex-col items-center justify-center gap-2 rounded border-t-1 border-solid border-body_dark p-2 pt-14 dark:border-darker-light lg:p-5">
            <img
              src="assets/teachers/dr_ali.webp"
              alt="dr_ali"
              className="aspect-square w-20 cursor-pointer rounded-full object-cover opacity-70 transition-opacity hover:opacity-100"
            />
            <Link
              to={"/"}
              className="text-xl font-bold transition-colors hover:text-primary-color"
            >
              Classor
            </Link>
            <p className="text-center text-sm font-thin">
              Learn Everyth Everywh... : |
            </p>
            <Link
              to={"/"}
              className="bi bi-house-heart-fill text-4xl transition-colors hover:text-primary-color"
            ></Link>
          </div>
        </div>
        <div className="hidden rounded lg:col-span-2 lg:block">
          <span className="relative my-3 font-bold text-primary-color">
            Courses
          </span>
          <div className="group relative my-2 grid grid-cols-2 gap-3 rounded border-0 border-t-1 border-solid border-body_dark p-2 dark:border-darker-light lg:p-5">
            <a href="#" className="swiper-item relative text-white">
              <img
                src="assets/courses/writing.webp"
                alt="writing"
                className="z-10 h-full w-full rounded-md object-cover"
              />
              <div className="absolute bottom-0 z-20 block">
                <p className="text-xxs font-bold">
                  Lorem ipsum dolor sit amet.
                </p>
                <div className="mb-2 grid grid-cols-3">
                  <div className="col-span-2 flex items-center gap-2 text-xs">
                    <p className="min-w-max">
                      <i className="bi bi-person-circle"></i>
                      Classor
                    </p>
                    <p className="hidden min-w-max xmd:block">
                      <i className="bi bi-alarm"></i>2 Hours Ago
                    </p>
                  </div>
                  <p className="justify-self-end text-xs text-primary-strong">
                    <i className="bi bi-fire"></i>
                    234
                  </p>
                </div>
              </div>
            </a>
            <a href="#" className="swiper-item relative text-white">
              <img
                src="assets/courses/webDesign.webp"
                alt="webDesign"
                className="z-10 h-full w-full rounded-md object-cover"
              />
              <div className="absolute bottom-0 z-20 block">
                <p className="text-xxs font-bold">
                  Lorem ipsum dolor sit amet.
                </p>
                <div className="mb-2 grid grid-cols-3">
                  <div className="col-span-2 flex items-center gap-2 text-xs">
                    <p className="min-w-max">
                      <i className="bi bi-person-circle"></i>
                      Classor
                    </p>
                    <p className="hidden min-w-max xmd:block">
                      <i className="bi bi-alarm"></i>2 Hours Ago
                    </p>
                  </div>
                  <p className="justify-self-end text-xs text-primary-strong">
                    <i className="bi bi-fire"></i>
                    234
                  </p>
                </div>
              </div>
            </a>
            <a href="#" className="swiper-item relative text-white">
              <img
                src="assets/courses/react.webp"
                alt="React"
                className="z-10 h-full w-full rounded-md object-cover"
              />
              <div className="absolute bottom-0 z-20 block">
                <p className="text-xxs font-bold">
                  Lorem ipsum dolor sit amet.
                </p>
                <div className="mb-2 grid grid-cols-3">
                  <div className="col-span-2 flex items-center gap-2 text-xs">
                    <p className="min-w-max">
                      <i className="bi bi-person-circle"></i>
                      Classor
                    </p>
                    <p className="hidden min-w-max xmd:block">
                      <i className="bi bi-alarm"></i>2 Hours Ago
                    </p>
                  </div>
                  <p className="justify-self-end text-xs text-primary-strong">
                    <i className="bi bi-fire"></i>
                    234
                  </p>
                </div>
              </div>
            </a>
            <a href="#" className="swiper-item relative text-white">
              <img
                src="assets/courses/programming.webp"
                alt="programming"
                className="z-10 h-full w-full rounded-md object-cover"
              />
              <div className="absolute bottom-0 z-20 block">
                <p className="text-xxs font-bold">
                  Lorem ipsum dolor sit amet.
                </p>
                <div className="mb-2 grid grid-cols-3">
                  <div className="col-span-2 flex items-center gap-2 text-xs">
                    <p className="min-w-max">
                      <i className="bi bi-person-circle"></i>
                      Classor
                    </p>
                    <p className="hidden min-w-max xmd:block">
                      <i className="bi bi-alarm"></i>2 Hours Ago
                    </p>
                  </div>
                  <p className="justify-self-end text-xs text-primary-strong">
                    <i className="bi bi-fire"></i>
                    234
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
