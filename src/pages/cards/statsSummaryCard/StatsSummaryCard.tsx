import {Card, Grid, Stack} from "@mui/joy";
import {RoundStatsSummary} from "@common/sdk/types/RoundStatsSummaryResponse";
import {StatsSummaryCardBasicInfo} from "./StatsSummaryCardBasicInfo";
import {WeaponsTableCard, WeaponsTableRow} from "./WeaponsTableCard";
import {ClassesTableCard, ClassesTableRow} from "./ClassesTableCard";
import {DonutChartData} from "@common/components";

export interface StatsSummaryCardProps {
  data: RoundStatsSummary
  weaponTableData: WeaponsTableRow[]
  classesTableData: ClassesTableRow[]
  timePlayed: DonutChartData[]
}

export const StatsSummaryCard = ({ data, weaponTableData, classesTableData, timePlayed }: StatsSummaryCardProps) => {
  return (
    <Card variant="plain">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap">
        <Grid xs={7}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}>
            <ClassesTableCard data={classesTableData} />
            <WeaponsTableCard data={weaponTableData} />
          </Stack>
        </Grid>
        <Grid xs={5}>
          <StatsSummaryCardBasicInfo data={data} timePlayed={timePlayed} />
        </Grid>
      </Stack>
    </Card>
  )
}