'use client';
import * as React from 'react';

type InputFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  type,
}) => {
  return (
    <div className="flex flex-col flex-1 grow shrink-0 justify-center basis-0 w-fit">
      <label htmlFor={id} className="text-lg tracking-normal capitalize">
        {label}
      </label>
      <input
        className="justify-center items-start px-5 py-3.5 mt-5 text-base font-light tracking-normal leading-6 bg-gray-100 rounded-2xl"
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
};

const ConsultationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <section className="flex flex-col pb-1 bg-gray-100 rounded-3xl shadow-2xl max-w-[621px] text-neutral-600 fixed bottom-2 right-1 z-50">
      <div className="flex flex-col justify-center mt-1 max-md:mr-1 max-md:max-w-full">
        <div className="flex flex-col justify-center max-md:max-w-full">
          <div className="flex flex-col px-8 py-8 bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 text-xl font-medium text-emerald-950 text-opacity-50 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto">
                Schedule a <span className="text-emerald-950">free</span>{' '}
                consultation
              </div>
              <img
                onClick={() => onClose()}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c1f401e85ab907962fe0c220c1f4d3194878009143d31ed82bb34076e0cb41d?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                alt=""
                className="shrink-0 w-6 aspect-square cursor-pointer"
              />
            </div>
            <form
              onSubmit={() => {
                onClose();
                console.log('submitted');
              }}
            >
              <div className="flex gap-5 mt-9 max-md:flex-wrap">
                <InputField
                  id="firstName"
                  label="First Name"
                  placeholder="Enter First Name"
                  type="text"
                />
                <InputField
                  id="lastName"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  type="text"
                />
              </div>
              <div className="flex gap-5 mt-8 max-md:flex-wrap">
                <InputField
                  id="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <InputField
                  id="phone"
                  label="Phone"
                  placeholder="Enter your phone"
                  type="tel"
                />
              </div>
              <div className="flex flex-col mt-8 max-md:max-w-full">
                <label
                  htmlFor="message"
                  className="text-lg tracking-normal capitalize max-md:max-w-full"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="justify-center items-start px-5 py-3.5 mt-5 text-base font-light tracking-normal leading-6 bg-gray-100 rounded-2xl max-md:max-w-full"
                  placeholder="Enter your message"
                  aria-label="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="m-auto mt-11 flex flex-col justify-center p-0.5 rounded-[100px] text-lg bg-black text-white border-black"
              >
                <div className="px-6 py-3 border-solid border-white rounded-[100px]">
                  Schedule
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FreeConsultation: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <ConsultationModal isOpen={modalOpen} onClose={toggleModal} />
      <div
        onClick={toggleModal}
        className="flex flex-col justify-center self-end p-0.5 mt-6 bg-[#04554A] rounded-[100px] w-[227px] fixed right-5 bottom-5 z-10 cursor-pointer"
      >
        <div className="flex gap-2.5 justify-center px-3.5 py-2.5 border border-white border-solid bg-[#04554A] rounded-[100px] text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a95bf99483a319c8796a62ca9db92dd6b1af47d42ec3b18ca085bfdffa3211eb?apiKey=fac0b9adbf9c43738d3faaf142128124&"
            alt="Free consultation icon"
            className="shrink-0 my-auto w-6 aspect-square"
          />
          <div>Free Consultation</div>
        </div>
      </div>
    </div>
  );
};

export { FreeConsultation };
