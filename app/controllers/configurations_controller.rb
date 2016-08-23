class ConfigurationsController < ApplicationController
  def home
    @form_schema = form_schema
  end

  def form_schema
    [
      [
        {
            name: 'locations',
            className: 'center',
            label: 'Locations (Leave blank for all)',
            placeholder: '...'
        },
        {
            name: 'rockets',
            options: ['Falcon 9', 'Delta IV'],
            multipleOptions: true,
            className: 'center',
            label: 'Rockets (Leave blank for all)',
            placeholder: '...'
        }
      ],
      [
        {
            name: 'frequency',
            options: ['Daily', 'Weekly', 'Monthly'],
            defaultValue: 'Weekly',
            className: 'center',
            label: 'Frequency',
            placeholder: '...'
        },
        {
            custom: true,
            field: 'notification_time_field'
        },
        {
            name: 'notification_time_before_launch',
            className: 'center',
            label: 'Notification Time Before Launch',
            placeholder: '...'
        }
      ],
      [
        {
            name: 'email',
            className: 'center',
            label: 'Email',
            placeholder: '...'
        },
        {
            name: 'phone_number',
            className: 'center',
            label: 'Phone Number',
            placeholder: '...'
        }
      ]

    ]
  end
end

