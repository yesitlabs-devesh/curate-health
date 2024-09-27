'use client';
import * as React from 'react';
import '@radix-ui/themes/styles.css';
import EmailSection from '@/sections/email-section';
import { FreeConsultation } from '@/components/ui/free-consultation';
import ImageCard from '@/components/ui/image-card';

function ForEmployersPage() {
  return (
    <div className="max-w-[1152px] m-auto">
      <ImageCard
        title="Make it easier for your employees to navigate the healthcare system."
        description="Curate is the leading care navigation platform for employers. With our network of trusted physicians and partners, we make it easier for patients to get the care they need without having to wait on hold."
        image="/assets/images/for-employers-1.png"
        background="primary"
      />
      <FreeConsultation />
      <ImageCard
        title="We find the perfect partner for your employees’ health journeys."
        description="We know that navigating the healthcare system can feel overwhelming. Your employees deserve a trusted partner to help them find top specialists in their network, schedule their appointments, and resolve insurance issues."
        image="/assets/images/for-employers-2.png"
        background="secondary"
      />
      <EmailSection
        title="Interested in partnering with us?"
        description="Please enter your email and we’ll be in touch soon!"
      />
    </div>
  );
}

export default ForEmployersPage;
