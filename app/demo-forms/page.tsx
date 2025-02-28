import { ProfileForm } from "@/components/demo-forms/profile/profile-form";
import BackButton from "@/components/custom-made/LinkBack";
import { Separator } from "@/components/ui/separator";
import { NotificationsForm } from "@/components/demo-forms/notifications/notifications-form";
import { AppearanceForm } from "@/components/demo-forms/appearance/appearance-form";
import { AccountForm } from "@/components/demo-forms/account/account-form";

export default function DemoFormsPage() {
  return (
    <div className="container mx-auto py-10">
      <BackButton className="w-full" size={"lg"}>
        Return
      </BackButton>
      {/* <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div> */}
      <div className="w-full py-4">
        <ProfileForm />
      </div>
      <div className="w-full py-4">
        <AccountForm />
      </div>
      <div className="w-full py-4">
        <NotificationsForm />
      </div>
      <div className="w-full py-4">
        <AppearanceForm />
      </div>
      <div className="w-full py-4">
        <NotificationsForm />
      </div>
    </div>
  );
}
