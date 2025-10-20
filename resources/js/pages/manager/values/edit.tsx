import ManagerLayout from '@/layouts/manager-layout';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';
import value from '@/routes/manager/value';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import Select from 'react-select';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'مقدار ها',
        href: value.index(),
    },
    {
        title: 'ویرایش کردن مقدار',
        href: '#',
    },
];
export default function edit({attributeLists , valueItem}) {

    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
    const { data, setData, post, processing, errors, reset, clearErrors } =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useForm({
            value: valueItem.data.value || '',
            attribute_id: valueItem.data.attribute_id || null,
        });
    const newErrors: Record<string, string> = {};
    const  handleSubmit = (e)=>{
        e.preventDefault();
        setLocalErrors({});
        clearErrors();
        if (!data.value) newErrors.value = 'نام مقدار الزامی است';
        if (!data.attribute_id) newErrors.attribute_id = 'انتخاب ویژگی الزامی است';
        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }
        // @ts-ignore
        post(value.store(), {
            onSuccess: () => reset('value'),
        });
    }
    const attributeOptions = attributeLists.data.map((attr) => ({
        value: attr.id,
        label: attr.name,
    }));
    return (
      <ManagerLayout breadcrumbs={breadcrumbs}>
          <Card className="bg-gray-800">
              <CardHeader>اضافه کردن مقدار جدید</CardHeader>
              <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                          <Label htmlFor="value">نام مقدار</Label>
                          <div className="col-span-1 md:col-span-3">
                              <Input
                                  name="value"
                                  id="value"
                                  value={data.value}
                                  onChange={(e) =>
                                      setData('value', e.target.value)
                                  }
                                  type="text"
                                  placeholder=" به طور مثال : 25 گیگ {اجباری}"
                              />
                              <InputError
                                  message={errors.value || localErrors.value}
                              />
                          </div>
                      </div>
                      <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                          <Label htmlFor="value">ویژگی</Label>
                          <div className="col-span-1 md:col-span-3">
                              <Select
                                  id="attribute"
                                  placeholder="یک ویژگی انتخاب کنید..."
                                  options={attributeOptions}
                                  value={attributeOptions.find(
                                      (opt) => opt.value === data.attribute_id
                                  )}
                                  onChange={(selected) =>
                                      setData('attribute_id', selected ? selected.value : null)
                                  }
                                  className="text-black" // برای اینکه متن سفید نشه
                              />
                              <InputError
                                  message={errors.attribute_id || localErrors.attribute_id}
                              />
                          </div>
                      </div>
                      <Button
                          type="submit"
                          className="w-full relative"
                          disabled={processing}
                      >
                          {processing ? 'در حال ذخیره...' : 'ذخیره'}
                      </Button>
                  </form>
              </CardContent>
          </Card>

      </ManagerLayout>
    );
}
