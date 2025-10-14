import ManagerLayout from '@/layouts/manager-layout';

export default function({userItem}){
    return (
      <ManagerLayout>
          {userItem.data.phone}
      </ManagerLayout>
    );
}
