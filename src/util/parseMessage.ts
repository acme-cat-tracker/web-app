import { Message } from '../@types/Message'

/**
 * This merges a device message
 */
export const parseMessage = (message: {
	[key: string]: { v: any; ts: number }
}): Message => ({
	...(message.btn && {
		btn: {
			v: message.btn.v,
			ts: new Date(message.btn.ts),
		},
	}),
})
