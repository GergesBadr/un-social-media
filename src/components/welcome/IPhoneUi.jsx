function IPhoneUi({ children }) {
  return (
    <>
      <div className="relative h-[500px] w-[235px] rounded-[35px] border-2 border-white">
        {/* silence button */}
        <div className="absolute -left-[3px] top-20 h-4 w-[3px] rounded-sm bg-gray-600" />

        {/* volume-up */}
        <div className="absolute -left-[3px] top-32 h-7 w-[3px] rounded-sm bg-gray-600" />

        {/* volume-down */}
        <div className="absolute -left-[3px] top-44 h-7 w-[3px] rounded-sm bg-gray-600" />

        {/* power button */}
        <div className="absolute -right-[3px] top-32 h-11 w-[3px] rounded-sm bg-gray-600" />

        {/* inside-border */}
        <div className="relative h-full w-full rounded-[35px] border-[6px] border-black bg-[url(./assets/images/more/starry-night.webp)] bg-cover bg-center">
          {/* Camera */}
          <div className="relative -top-1 left-1/2 h-5 w-20 -translate-x-1/2 rounded-bl-2xl rounded-br-2xl bg-gray-800">
            {/* camera-dot */}
            <div className="absolute left-3 top-1 size-2 rounded-full bg-gray-600" />
          </div>

          {/* Bottom Line */}
          <div className="absolute bottom-2 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-md bg-gray-400" />

          {/* Content */}
          <div className="h-[calc(100%-35px)] overflow-hidden rounded-2xl">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default IPhoneUi;
