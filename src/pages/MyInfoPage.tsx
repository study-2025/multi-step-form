import html2canvas from 'html2canvas-pro';
import { useRef, useCallback, useEffect } from 'react';
import { useFormStore } from '../store/useFormStore';
import { useImageExportStore } from '../store/useImageExportStore';
import { twMerge } from 'tailwind-merge';
import { gradientOptions } from '../config/colorStyles';
import { useGradientStore } from '../store/useGradientStore';

const MyInfoPage = () => {
  const { form } = useFormStore();
  const { selectedGradientId } = useGradientStore();

  const componentRef = useRef<HTMLDivElement>(null);
  const setHandleSaveAsImage = useImageExportStore(
    (state) => state.setHandleSaveAsImage
  );

  const handleSaveAsImage = useCallback(async () => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current, {
        backgroundColor: null,
        useCORS: true,
      });
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'my-info.png';
      link.click();
    }
  }, []);

  useEffect(() => {
    setHandleSaveAsImage(handleSaveAsImage);
  }, [handleSaveAsImage, setHandleSaveAsImage]);

  const selectedGradient =
    gradientOptions.find((opt) => opt.id === selectedGradientId)?.className ||
    gradientOptions[0].className;

  const containerClasses = twMerge(
    'w-full max-w-xl',
    'rounded-4xl shadow-md flex flex-col items-center text-center',
    'p-10 gap-6',
    selectedGradient,
    'overflow-hidden'
  );

  const jobBadgeClasses =
    'px-2.5 py-1 bg-gray-50 rounded-full text-blue-600 font-semibold';

  const hobbyBadgeClasses =
    'px-3 py-1 bg-gray-50 text-gray-700 rounded-full font-semibold border border-gray-200';

  const introContainerClasses =
    'w-full bg-gray-50 border border-gray-200 rounded-2xl p-4';

  return (
    <main className="flex-grow flex flex-col items-center justify-center bg-gray-50">
      <div ref={componentRef} className={containerClasses}>
        <p className={jobBadgeClasses}>{form.job}</p>

        <p className="text-9xl">{form.gender === '남자' ? '🧑🏻‍💻' : '👩🏻‍💻'}</p>

        <p className="text-3xl text-gray-800 font-semibold">{form.name}</p>

        <hr className="w-full border-gray-300" />

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <p className="text-gray-700 font-semibold">취미</p>
            <div className="flex gap-2">
              {form.hobby.map((hobby, index) => (
                <span key={index} className={hobbyBadgeClasses}>
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full">
            <p className="text-lg font-semibold text-gray-800 mb-2">자기소개</p>
            <div className={introContainerClasses}>
              <p className="text-base text-gray-700 leading-relaxed text-[15px] whitespace-normal">
                {form.selfIntroduction}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyInfoPage;
