'use client';
export default function Button() {
  return (
    <button
      onClick={() =>
        window.open(
          'https://drive.google.com/uc?export=download&id=1HfQ8QR9hYSVMN2cvtPg7kavzs-Y367NA'
        )

      }
      className='bg-secondary w-fit p-3 text-[11px] rounded-md text-white hover:bg-button_hover transition-all transform hover:px-6 hover:scale-100 duration-300'>
      Download
    </button>
  );
}
