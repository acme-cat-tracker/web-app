import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { SolutionConfigContext } from '../App'

export const Configuration = ({
	config,
}: {
	config: SolutionConfigContext
}) => (
	<Card data-intro="This card lists the apps configuration.">
		<CardHeader>Environment</CardHeader>
		<CardBody>
			<dl>
				<dt>App client id</dt>
				<dd>
					<code>{config.clientId}</code>
				</dd>
				<dt>API Endpoint</dt>
				<dd>
					<code>{config.apiEndpoint}</code>
				</dd>
			</dl>
		</CardBody>
	</Card>
)
