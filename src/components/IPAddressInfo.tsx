import { LocationData } from "../services";
import Skeleton from "./Skeleton";

interface IPAddressInfoProps {
  data: LocationData | null;
  loading: boolean;
}

const IPAddressInfo: React.FC<IPAddressInfoProps> = ({ data, loading }) => {
  return (
    <main>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white min-w-80 md:min-w-[700px] lg:w-[1100px] rounded-2xl py-4 lg:py-8 px-4 lg:px-8 gap-4 lg:divide-x divide-black/15 text-center lg:text-left">
        {data && (
          <>
            <IPAddressInfoItem
              label="IP address"
              value={data.ipAddress}
              loading={loading}
            />
            <IPAddressInfoItem
              label="Location"
              value={data.location}
              loading={loading}
            />
            <IPAddressInfoItem
              label="Timezone"
              value={`UTC ${data.timezone}`}
              loading={loading}
            />
            <IPAddressInfoItem label="ISP" value={data.isp} loading={loading} />
          </>
        )}
      </ul>
    </main>
  );
};

interface IPAddressInfoItemProps {
  label: string;
  value: string | null;
  additionalValue?: string;
  loading: boolean;
}

const IPAddressInfoItem: React.FC<IPAddressInfoItemProps> = ({
  label,
  value,
  additionalValue,
  loading,
}) => {
  return (
    <li className="first:pl-0 pl-4 lg:pl-8">
      <p className="text-info-heading-mobile md:text-info-heading text-custom-gray/50 uppercase font-bold pb-1 lg;pb-3">
        {label}
      </p>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <p className="text-info-mobile md:text-info font-medium">{value}</p>
          {additionalValue && (
            <p className="text-info-mobile md:text-info font-medium">
              {additionalValue}
            </p>
          )}
        </>
      )}
    </li>
  );
};

export default IPAddressInfo;
