import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/anlxrxma", userinfo);
      toast.success("✅ Your message has been sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Please fill out the form below and we’ll get back to you soon.
          </p>
        </div>

        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Send Your Message
            </h2>

            {/* Full Name */}
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-gray-800"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 block">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-gray-800"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  This field is required
                </span>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-gray-800 resize-none"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1 block">
                  This field is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Toaster position="top-center" />
    </>
  );
};

export default Contact;
