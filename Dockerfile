FROM ruby:2.3.1
# FROM didme/bill

MAINTAINER Xiaozhu didmehh@163.com
RUN apt-get update && apt-get install -y build-essential libssl-dev libpq-dev libxml2-dev libxslt1-dev nodejs git imagemagick libbz2-dev libjpeg-dev libevent-dev libmagickcore-dev libffi-dev libglib2.0-dev zlib1g-dev libyaml-dev --no-install-recommends && rm -rf /var/lib/apt/lists/*

ENV APP_HOME /home/${whoami}/www

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY Gemfile $APP_HOME/
COPY Gemfile.lock $APP_HOME/

RUN bundle install

COPY . $APP_HOME

RUN RAILS_ENV=production bundle exec rake assets:precompile

EXPOSE 8080
CMD ["bundle", "exec", "puma", "-C", "config/puma_docker.rb"]
