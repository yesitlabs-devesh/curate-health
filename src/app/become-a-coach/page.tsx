'use client';
import * as React from 'react';
import '@radix-ui/themes/styles.css';
import EmailSection from '@/sections/email-section';
import { FreeConsultation } from '@/components/ui/free-consultation';
import ImageCard from '@/components/ui/image-card';

function BecomeACoachPage() {
  return (
    <div className="max-w-[1152px] m-auto text-sm">
      <ImageCard
        title="Be A Coach, Not a Full Time Influencer."
        description={
          <div className="text-stone-50 text-base">
            {
              'When you become a certified health and wellness coach, you imagined helping clients achieve their goals. Not posting daily on Instagram or Tik Tok.'
            }
            <br />
            <br />
            {
              'By partnering with employers, physicians, and through our own marketing channels, Curate ensures health coaches have consistent demand for their services. And there’s zero cost to join!'
            }
          </div>
        }
        image="/assets/images/become-a-coach-1.png"
        background="primary"
      />
      <FreeConsultation />
      <ImageCard
        title="We provide the care navigation support, so you can focus on coaching."
        description="We believe that health coaching and care navigation go hand-in-hand. Great health coaches understand their scope of practice, which frequently means making referrals to medical specialists. That’s where Curate’s support staff come in."
        image="/assets/images/become-a-coach-2.png"
        background="secondary"
      />
      {/* <h4 className="m-auto text-center">Earn What You Want, When You Want</h4>
        <div className="flex justify-center items-center px-16 py-20 w-full bg-[#036C5F] rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center max-w-full w-[610px]">
                <div className="flex flex-col justify-center text-white max-md:max-w-full">
                    <div className="self-center text-6xl leading-[72px] max-md:text-4xl">
                        Master Coach
                    </div>
                </div>
                <div className="flex flex-col justify-center text-white max-md:max-w-full">
                    <div className="self-center text-6xl leading-[72px] max-md:text-4xl">
                        Certified Coach
                    </div>
                </div>
            </div>
        </div> */}

      <EmailSection
        title="Become a Curate Health Coach Today!"
        description="Explore Careers, or enter your email and we'll be in touch soon"
      />
    </div>
  );
}

export default BecomeACoachPage;
