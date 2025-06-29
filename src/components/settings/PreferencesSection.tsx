import React from "react";

interface PreferencesSectionProps {
  language?: string;
  timezone?: string;
  onLanguageChange?: (value: string) => void;
  onTimezoneChange?: (value: string) => void;
}

const PreferencesSection: React.FC<PreferencesSectionProps> = ({
  language,
  timezone,
  onLanguageChange,
  onTimezoneChange,
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-[22px] font-semibold ">Preferences</h2>
      <p className="my-[22px]">
        Customize the admin panel's interface, including language and timezone
        settings.
      </p>
      <input
        type="text"
        className="w-full max-w-md border border-[#e5e8eb] rounded-[8px] px-3 py-1 text-sm mb-4"
        value={language}
        onChange={(e) => onLanguageChange?.(e.target.value)}
      /> <br />
      <input
        type="text"
        className="w-full max-w-md border border-[#e5e8eb] rounded-[8px] px-3 py-1 text-sm"
        value={timezone}
        onChange={(e) => onTimezoneChange?.(e.target.value)}
      />
    </section>
  );
};

export default PreferencesSection;
