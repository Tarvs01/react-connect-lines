import {Card, Container, Grid} from '@sanity/ui'
import {motion} from 'framer-motion'
import {Connect} from '../connect-lines'

const MotionCard = motion(Card)

export function NewApi() {
  return (
    <Container padding={5}>
      <Grid columns={2} gap={8}>
        <Connect
          id="card-1"
          connectWith={[
            {
              id: 'card-4',
              color: 'red',
              stroke: 'dashed',
              edge: 'step',
            },
            {
              id: 'card-3',
              color: 'blue',
            },
          ]}
        >
          <MotionCard padding={4} border tone="primary" drag dragMomentum={false}>
            Card 1
          </MotionCard>
        </Connect>

        <Connect id="card-2">
          <MotionCard padding={4} border tone="primary" drag dragMomentum={false}>
            Card 2
          </MotionCard>
        </Connect>

        <Connect id="card-3">
          <MotionCard padding={4} border tone="primary" drag dragMomentum={false}>
            Card 3
          </MotionCard>
        </Connect>

        <Connect
          id="card-4"
          connectWith={[
            {
              id: 'card-3',
            },
          ]}
        >
          <MotionCard padding={4} border tone="primary" drag dragMomentum={false}>
            Card 4
          </MotionCard>
        </Connect>
      </Grid>
    </Container>
  )
}