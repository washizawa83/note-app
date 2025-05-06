import { SettingList } from '@/app/components/features/settings/SettingList';
import { PageLayout } from '@/app/components/layouts/PageLayout';

export const SettingsPage = () => {
  return (
    <PageLayout>
      <div>
        <h1 className="mb-8 text-2xl font-bold">Settings</h1>
        <div>
          <SettingList />
        </div>
      </div>
    </PageLayout>
  );
};

export default SettingsPage;
