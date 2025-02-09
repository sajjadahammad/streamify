import {
  Users,
  Play,
  DollarSign,
  UserCheck,
} from 'lucide-react';


const iconMap = {
  Users: Users,
  Play: Play,
  DollarSign: DollarSign,
  UserCheck: UserCheck,
};

export default function IndexCard({ data }) {

  const { metric, value, iconName } = data;

  const IconComponent = iconMap[iconName] || Users;
  return (
    <div className="flex justify-between items-center bg-sidebar rounded-xl px-4 py-5">
      <div>
        <p className="text-xs text-gray-600 mb-4 uppercase">{metric}</p>
        <p className="text-gray-200">{value}</p>
      </div>

      <IconComponent className="text-gray-400 size-6" />
    </div>
  )
}
