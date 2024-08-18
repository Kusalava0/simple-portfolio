import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import emailjs from 'emailjs-com';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_pzeekz7', 'template_1c3nm0i', form.current, 'n1Q81iFXI4yo4kQvT')
        .then((result: { text: any; }) => {
          console.log(result.text);
          toast({
            title: "Email sent successfully!",
            description: "Thank you for your message.",
          });
          e.currentTarget.reset();
        }, (error) => {
          console.log(error.text);
          toast({
            title: "Failed to send email",
            description: "Please try again later.",
            variant: "destructive",
          });
        });
    }
  };

  return (
    <div className="space-y-8 text-white w-full sm:w-1/2">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 flex flex-col">
          <ContactOption
            icon={<MdOutlineEmail className="text-2xl mb-2" />}
            title="Email"
            content="dkb03122001@gmail.com"
            link="mailto:dkb03122001@gmail.com"
          />
          <ContactOption
            icon={<FaLinkedin className="text-2xl mb-2" />}
            title="LinkedIn"
            content="Kusalava Badrinath D"
            link="https://www.linkedin.com/in/kusalava-badrinath-d/"
          />
          <ContactOption
            icon={<ImInstagram className="text-2xl mb-2" />}
            title="Instagram"
            content="kusalava_0"
            link="https://ig.me/m/kusalava_0"
          />
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input type="text" name="name" placeholder="Your Full Name" required className="w-full p-4 border border-gray-500 bg-gray-700 rounded-md" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-4 border border-gray-500 bg-gray-700 rounded-md" />
          <textarea name="message" rows={7} placeholder="Your Message" required className="w-full p-4 border border-gray-500 bg-gray-700 rounded-md"></textarea>
          <Button type="submit" className="bg-gray-700 hover:bg-gray-900">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

const ContactOption: React.FC<{icon: React.ReactNode; title: string; content: string; link: string}> = ({icon, title, content, link}) => (
  <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center gap-1">
    {icon}
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-gray-300">{content}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Send a message</a>
  </div>
);

export default Contact;