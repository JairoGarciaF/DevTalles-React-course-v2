interface Props {
  subtitle: string;
}

export const MySubtitle = ({ subtitle }: Props) => {
  return (
    <>
      <h6 className="text-xl">{subtitle}</h6>
      <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">
        Llamar a función{" "}
      </button>
    </>
  );
};
