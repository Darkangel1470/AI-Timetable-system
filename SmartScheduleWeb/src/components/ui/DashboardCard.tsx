import { Card, CardContent } from './card'
import { Button } from './button'

const DashboardCard = ({count=0, label, onClickHandler}) => {

  return (
    <Card className="flex flex-1">
        <CardContent className="flex flex-col p-6 w-full gap-1 ">
            {/* number */}
            <h1 className="font-bold text-4xl">{count}</h1>
            {/* Label */}
            <p className="text-lg">{label}</p>
            <Button onClick={onClickHandler} className="bg-violet-400 text-black hover:bg-violet-800 hover:text-white">
                Manage {label}
            </Button>
        </CardContent>
    </Card>
  )
}

export default DashboardCard