import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "John Abraham",
    role: "Consultant",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Organizer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Michael Smith",
    role: "Manager",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
  },
];

const AboutTeam = () => {
  return (
    <Container>
      <div className="my-20 lg:my-28 text-center">
        <span className="text-[#80B500] text-sm font-Nunito font-bold uppercase tracking-widest bg-[#F4F9EB] px-4 py-1.5 rounded-full inline-block mb-3">
          Expert Team
        </span>
        <h3 className="text-Primary text-3xl sm:text-4xl lg:text-[44px] font-Inter font-bold">
          Team Member
        </h3>
        <p className="text-[#546375] text-base font-Nunito pt-3 max-w-lg mx-auto">
          A highly efficient slip-ring scanner for today's diagnostic
          requirements.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-xl mb-6 bg-gray-50">
                <Images
                  srcImg={member.img}
                  className="mx-auto w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-Primary text-2xl font-Inter font-bold">
                {member.name}
              </h4>
              <p className="text-[#80B500] text-lg font-Nunito font-medium pt-1 pb-4">
                {member.role}
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="#twitter"
                  aria-label={`${member.name} Twitter`}
                  className="p-3 bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#facebook"
                  aria-label={`${member.name} Facebook`}
                  className="p-3 bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#instagram"
                  aria-label={`${member.name} Instagram`}
                  className="p-3 bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#linkedin"
                  aria-label={`${member.name} LinkedIn`}
                  className="p-3 bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default React.memo(AboutTeam);
