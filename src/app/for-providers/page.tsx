'use client';
import * as React from 'react';
import '@radix-ui/themes/styles.css';
import EmailSection from '@/sections/email-section';
import { FreeConsultation } from '@/components/ui/free-consultation';
import ImageCard from '@/components/ui/image-card';

function ForProvidersPage() {
  return (
    <div className="max-w-[1152px] m-auto">
      <ImageCard
        title="Give your patients the support they need to live well"
        description={
          <div className="text-stone-50 text-base">
            {
              'As a physician, you’re used to giving your patients lifestyle advice. Eat a balanced diet. Exercise regularly. Keep an eye on that blood pressure. But who is helping them actually implement this counsel?'
            }
            <br />
            <br />
            {
              'Curate pairs patients with a dedicated health coach to help them stay accountable to your advice.'
            }
          </div>
        }
        image="/assets/images/for-providers-1.png"
        background="primary"
      />
      <EmailSection
        title="Interested in partnering with us?"
        description="Please enter your email and we’ll be in touch soon!"
      />
    </div>
  );
}

export default ForProvidersPage;
