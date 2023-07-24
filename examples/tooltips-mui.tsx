// @ts-nocheck
import { Tooltip as MuiTooltip } from '@mui/material';

<ActivityCalendar
  data={data}
  renderBlock={(block, activity) => (
    <MuiTooltip
      title={`${activity.count} activities on ${activity.date}`}
    >
      {block}
    </MuiTooltip>
  )}
/>
