import React from "react";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800"
      >
        <h2 className="text-center text-base sm:text-2xl bg-purple-200 px-5 py-1 rounded-full dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-300 font-medium w-fit m-auto my-12">
          Contact
        </h2>

        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Let’s build something meaningful
              </h2>
              <p className="opacity-80 mt-3">
                For collaborations, manuscripts, speaking or consulting, send a
                message and I will get in touch.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p>
                  📧{" "}
                  <a
                    className="underline underline-offset-4"
                    href="hello@othuke.com"
                  >
                    hello@othuke.com
                  </a>
                </p>
                <p>
                  🔗{" "}
                  <a className="underline underline-offset-4" href="#">
                    LinkedIn
                  </a>{" "}
                  •{" "}
                  <a className="underline underline-offset-4" href="#">
                    X
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm grid gap-4">
              <input
                className="px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 
                     placeholder-neutral-500 dark:placeholder-neutral-400"
                placeholder="Your name"
              />
              <input
                className="px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 
                     placeholder-neutral-500 dark:placeholder-neutral-400"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 min-h-32 
                     placeholder-neutral-500 dark:placeholder-neutral-400 resize-none"
                placeholder="Message"
              />
              <button
                className="px-5 py-3 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow hover:opacity-90"
                type="button"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
