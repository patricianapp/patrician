import React, { ReactElement, useState } from 'react';
import {
	makeStyles,
	createStyles,
	Theme,
	Typography,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	// Box,
} from '@material-ui/core';
import { positions } from '@material-ui/system';
import clsx from 'clsx';
import { CollectionItem } from '../../collection-item.interface';

interface Props {
	item: CollectionItem;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			position: 'relative',
			width: 200,
			height: 285,
			transition: 'height 0.3s',
			zIndex: (props: { hovered: boolean }) => (props.hovered ? 8000 : 0),
			'&:hover': {
				height: 350,
				transition: 'height 0.3s',
			},
		},
		'@keyframes textMarquee': {
			from: {
				transform: 'translateX(0%)',
				right: '0%',
			},
			to: {
				transform: 'translateX(-100%)',
				right: '-100%',
			},
		},
		itemText: {
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textAlign: 'center',
		},
		itemTextHovered: {
			animationName: '$textMarquee',
			animationDuration: '3s',
			animationPlayState: (props: { hovered: boolean }) =>
				props.hovered ? 'running' : 'paused',
			animationIterationCount: 'infinite',
			animationDirection: 'alternate',
			display: 'inline-block',
			position: 'relative',
			right: '-100%',
			transform: 'translateX(-100%)',
		},
		control: {
			padding: theme.spacing(2),
		},
	})
);

export default function CollectionItemCard({ item }: Props): ReactElement {
	const [hovered, setHovered] = useState(false);
	const styleProps = { hovered };
	const classes = useStyles(styleProps);
	const longText = item.Title.length > 20; // TODO: Make this conditional based on width of card and title

	return (
		<div style={{ height: '300px' }}>
			<Card
				className={classes.root}
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => {
					setHovered(false);
				}}
			>
				<CardActionArea>
					<CardMedia
						component="img"
						alt={`${item.Title}`}
						height="200"
						image={
							item.CoverArt
								? item.CoverArt
								: `https://coverartarchive.org/release-group/${item.MBID}/front-250`
						}
						title={`${item.Title}`}
					/>
					<CardContent>
						<div style={{ height: '30px' }}>
							<Typography className={classes.itemText} gutterBottom>
								{item.Artist}{' '}
							</Typography>
						</div>
						<div style={{ height: '30px' }}>
							<Typography
								className={clsx(classes.itemText, {
									[classes.itemTextHovered]: hovered && longText,
								})}
								gutterBottom
							>
								{item.Title}{' '}
							</Typography>
						</div>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
