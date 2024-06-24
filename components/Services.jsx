import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="About Us"
          text="Skilled web developer with in-depth knowledge and hands-on experience in a variety of modern web technologies."
        />

        <div className="relative mt-10 mb-10">

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="src\assetsMine\priyanshu.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="priyanshu"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Priyanshu Samal</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                I focused on the frontend development, ensuring seamless integration with the backend & design a product that attracts customers.
                </p>
              </div>
            </div>
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="src\assetsMine\naman.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="naman"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Naman Mishra</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                I have developed a comprehensive project utilizing AWS services, focusing on S3 buckets, IAM service accounts, and deployment pipelines. 
                </p>
              </div>

            </div>
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="src\assetsMine\krishna.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="krisna"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Krishna Goyal</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                I focused on converting images to COCO format, splitting the dataset, training a machine learning model, and setting up a comprehensive Python repository.
                </p>
              </div>

            </div>
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="src\assetsMine\anurag.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="anurag"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Anurag Dixit</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                My contribution involves developing a machine learning (ML) model for helmet detection, integrating it with APIs, and providing a full-stack solution with frontend and backend components
                </p>
              </div>
            </div>

            
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
